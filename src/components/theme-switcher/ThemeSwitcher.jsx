import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { HiOutlineMoon } from 'react-icons/hi';
import { ImSun } from 'react-icons/im';
import { themeContext } from '../../other/themeContext';
import classes from './theme-switcher.module.scss';

export default function ThemeSwitcher() {
	const { t } = useTranslation();
	const { isDark, toggleTheme } = useContext(themeContext);

	const changeTheme = () => {
		toggleTheme();
	};

	return (
		<button
			className={isDark ? classes.switch_dark : classes.switch_light}
			onClick={changeTheme}
		>
			{isDark ? (
				<>
					<ImSun />
					{t('theme.light')}
				</>
			) : (
				<>
					<HiOutlineMoon />
					{t('theme.dark')}
				</>
			)}
		</button>
	);
}
