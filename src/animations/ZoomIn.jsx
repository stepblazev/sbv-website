import { useContext } from 'react';
import { useSpring, animated, easings } from 'react-spring';
import { themeContext } from '../other/themeContext';

export default function ZoomIn({ delay = 0, mobileDisabled = false, children }) {
	const { isMobile } = useContext(themeContext);

	const props = useSpring({
		opacity: 1,
		transform: 'scale(1)',
		from: { opacity: 0, transform: 'scale(0.8)' },
		config: { duration: 700, easing: easings.easeOutQuart },
		leave: { opacity: 0, transform: 'scale(1)' },
		immediate: mobileDisabled && isMobile,
		delay,
	});

	return <animated.div style={props}>{children}</animated.div>;
}
