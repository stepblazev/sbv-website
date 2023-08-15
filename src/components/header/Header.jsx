import { useContext, useState, useEffect } from 'react';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';
import ThemeSwitcher from '../theme-switcher/ThemeSwitcher';
import { themeContext } from '../../other/themeContext';
import OpenBurger from '../_BURGER/open-burger/OpenBurger';
import classes from './header.module.scss';

export default function Header() {
	const { isDark, isMobile } = useContext(themeContext);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY >= 30);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const isScrolledStyles = {
		boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.1)',
	};

	return (
		<header
			className={isDark ? classes.header_dark : classes.header_light}
			style={isMobile && isScrolled ? isScrolledStyles : null}
		>
			<div className={[classes.content, 'container'].join(' ')}>
				<LanguageSwitcher />
				{isMobile ? <OpenBurger /> : <ThemeSwitcher />}
			</div>
		</header>
	);
}
