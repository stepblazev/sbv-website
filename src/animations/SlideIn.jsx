import { useSpring, animated, easings } from 'react-spring';

export default function SlideIn({ delay, children }) {
	const props = useSpring({
		from: { opacity: 0, transform: 'translateX(-50px)' },
		to: { opacity: 1, transform: 'translateY(0px)' },
		config: { duration: 700, easing: easings.easeOutQuart },
		delay,
	});

	return <animated.div style={props}>{children}</animated.div>;
}
