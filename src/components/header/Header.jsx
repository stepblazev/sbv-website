import LanguageSwitcher from '../language-switcher/LanguageSwitcher';
import ThemeSwitcher from '../theme-switcher/ThemeSwitcher';
import classes from './header.module.scss';

export default function Header() {
	return (
		<header className={classes.header}>
			<div className={[classes.headerContent, 'container'].join(' ')}>
				<LanguageSwitcher />
				<ThemeSwitcher />
			</div>
		</header>
	);
}
