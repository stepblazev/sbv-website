import { useContext } from 'react';
import { themeContext } from '../../other/themeContext';
import classes from './page-container.module.scss';

export default function PageContainer({ children }) {
	const { isDark, isMobile } = useContext(themeContext);

	return (
		<div
			className={isDark ? classes.container_dark : classes.container_light}
			style={isMobile ? { animation: 'unset' } : {}}
		>
			{children}
		</div>
	);
}
