import { useContext } from 'react';
import Header from '../header/Header';
import { themeContext } from '../../other/themeContext';
import FixedLinks from '../fixed-links/FixedLinks';
import FadeIn from '../../animations/FadeIn';
import classes from './layout.module.scss';

export default function Layout({ children }) {
	const { isDark } = useContext(themeContext);

	return (
		<div className={isDark ? classes.app_dark : classes.app_light}>
			<Header />
			<main className={[classes.app__container, 'container'].join(' ')}>
				<FadeIn>
					<div className={isDark ? classes.content_dark : classes.content_light}>
						{children}
					</div>
				</FadeIn>
			</main>
			<FixedLinks />
		</div>
	);
}
