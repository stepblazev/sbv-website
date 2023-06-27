import { useContext } from 'react';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';
import ThemeSwitcher from '../theme-switcher/ThemeSwitcher';
import classes from './header.module.scss';
import { themeContext } from '../../other/themeContext';

export default function Header() {
	const { isDark } = useContext(themeContext);

	return (
		<header className={isDark ? classes.header_dark : classes.header_light}>
			<div className={[classes.content, 'container'].join(' ')}>
				<LanguageSwitcher />
				<ThemeSwitcher />
			</div>
		</header>
	);
}
