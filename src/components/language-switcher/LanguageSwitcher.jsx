import { useContext } from 'react';
import { themeContext } from '../../other/themeContext';
import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md';
import classes from './language-switcher.module.scss';

export default function LanguageSwitcher() {
	const { i18n } = useTranslation();
	const { isDark } = useContext(themeContext);

	const changeLanguage = (event) => {
		const lng = event.target.value;
		localStorage.setItem('language', lng);
		i18n.changeLanguage(lng);
	};

	return (
		<div className={isDark ? classes.switch_dark : classes.switch_light}>
			<MdLanguage />
			<button
				onClick={changeLanguage}
				value='en'
				style={{ fontWeight: i18n.language === 'en' ? '700' : '500' }}
			>
				ENG
			</button>
			<button
				onClick={changeLanguage}
				value='ru'
				style={{ fontWeight: i18n.language === 'ru' ? '700' : '500' }}
			>
				РУС
			</button>
			<div
				className={isDark ? classes.underline_dark : classes.underline_light}
				style={{ left: i18n.language === 'en' ? '37px' : '77px' }}
			></div>
		</div>
	);
}
