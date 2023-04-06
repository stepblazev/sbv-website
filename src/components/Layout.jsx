import { useContext } from 'react';
import Header from './header/Header';
import { themeContext } from '../other/themeContext';
import FixedLinks from './fixed-links/FixedLinks';

export default function Layout({ children }) {
	const { isDark } = useContext(themeContext);

	return (
		<>
			<div className={isDark ? 'app_dark' : 'app_light'}>
				<Header />
				<main className='app__content container'>{children}</main>
				<FixedLinks />
			</div>
		</>
	);
}
