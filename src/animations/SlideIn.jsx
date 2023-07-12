import { useContext } from 'react';
import { useSpring, animated, easings } from 'react-spring';
import { themeContext } from '../other/themeContext';

export default function SlideIn({ delay = 0, mobileDisabled = false, duration = 700, children }) {
	const { isMobile } = useContext(themeContext);

	const props = useSpring({
		from: { opacity: 0, transform: 'translateX(-50px)' },
		to: { opacity: 1, transform: 'translateY(0px)' },
		config: { duration, easing: easings.easeOutQuart },
		immediate: mobileDisabled && isMobile,
		delay,
	});

	return <animated.div style={props}>{children}</animated.div>;
}
