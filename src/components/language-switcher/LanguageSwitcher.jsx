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
				style={{
					textDecoration: i18n.language === 'en' ? 'underline' : 'none',
				}}
			>
				ENG
			</button>
			<button
				onClick={changeLanguage}
				value='ru'
				style={{
					textDecoration: i18n.language === 'ru' ? 'underline' : 'none',
				}}
			>
				РУС
			</button>
		</div>
	);
}
