import { useContext } from 'react';
import { useSpring, animated, easings } from 'react-spring';
import { themeContext } from '../other/themeContext';

export default function SpinIn({ delay = 0, mobileDisabled = false, duration = 700, children }) {
	const { isMobile } = useContext(themeContext);

	const props = useSpring({
		from: { opacity: 0, transform: 'scale(0.6) rotate(360deg)' },
		to: { opacity: 1, transform: 'scale(1) rotate(0deg)' },
		config: { duration, easing: easings.easeOutQuart },
		immediate: mobileDisabled && isMobile,
		delay,
	});

	return <animated.div style={props}>{children}</animated.div>;
}
