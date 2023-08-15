import { Fragment, useContext } from 'react';
import { themeContext } from '../../other/themeContext';
import Header from '../header/Header';
import FixedLinks from '../fixed-links/FixedLinks';
import Version from '../version/Version';
import BurgerMenu from '../_BURGER/burger-menu/BurgerMenu';
import classes from './layout.module.scss';

export default function Layout({ children }) {
	const { isDark, isMobile, isBurger } = useContext(themeContext);

	return (
		<Fragment>
			<div
				className={isDark ? classes.app_dark : classes.app_light}
				style={isBurger ? { transform: 'translateX(100%)' } : {}}
			>
				<Header />
				<main className={[classes.app__container, 'container'].join(' ')}>{children}</main>
				<FixedLinks />
				<Version />
			</div>
			{isMobile && <BurgerMenu />}
		</Fragment>
	);
}
