import { useContext } from 'react';
import { themeContext } from '../../other/themeContext';
import ZoomOut from '../../animations/ZoomOut';
import classes from './page-container.module.scss';

export default function PageContainer({ children }) {
	const { isDark, isMobile } = useContext(themeContext);

	return (
		// <ZoomOut mobileDisabled={true}>
		<div
			className={isDark ? classes.container_dark : classes.container_light}
			style={isMobile ? { animation: 'unset' } : {}}
		>
			{children}
		</div>
		// </ZoomOut>
	);
}
