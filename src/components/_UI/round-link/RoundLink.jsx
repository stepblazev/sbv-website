import { useContext, useState } from 'react';
import { themeContext } from '../../../other/themeContext';
import classes from './round-link.module.scss';

export default function RoundLink({ ICON, tooltip, href, color = '#E4405F' }) {
	const { isDark } = useContext(themeContext);
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};
	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const boxStyle = {
		backgroundColor: color,
		fill: '#fff',
	};

	return (
		<a
			href={href}
			target='_blank'
			className={isDark ? classes.link_dark : classes.link_light}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={isHovered ? boxStyle : null}
		>
			<span className={classes.tooltip} style={{ backgroundColor: color }}>
				{tooltip}
			</span>
			<ICON />
		</a>
	);
}
