import { useContext } from 'react';
import Header from '../header/Header';
import { themeContext } from '../../other/themeContext';
import FixedLinks from '../fixed-links/FixedLinks';
import classes from './layout.module.scss';
import Version from '../version/Version';

export default function Layout({ children }) {
	const { isDark } = useContext(themeContext);

	return (
		<div className={isDark ? classes.app_dark : classes.app_light}>
			<Header />
			<main className={[classes.app__container, 'container'].join(' ')}>{children}</main>
			<FixedLinks />
			<Version />
		</div>
	);
}
