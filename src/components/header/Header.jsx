import { useContext, useState, useEffect } from 'react';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';
import ThemeSwitcher from '../theme-switcher/ThemeSwitcher';
import { themeContext } from '../../other/themeContext';
import classes from './header.module.scss';

export default function Header() {
	const { isDark, isMobile } = useContext(themeContext);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY >= 25);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			className={isDark ? classes.header_dark : classes.header_light}
			style={{
				boxShadow: isMobile && isScrolled ? '0px 2px 8px 0px rgba(0, 0, 0, 0.1)' : '',
			}}
		>
			<div className={[classes.content, 'container'].join(' ')}>
				<LanguageSwitcher />
				<ThemeSwitcher />
			</div>
		</header>
	);
}
