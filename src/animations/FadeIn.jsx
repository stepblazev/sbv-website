import { useSpring, animated, easings } from 'react-spring';

export default function FadeIn({ delay = 0, mobileDisabled = false, children }) {
	const isMobile = window.innerWidth < 600;

	const props = useSpring({
		opacity: 1,
		transform: 'scale(1)',
		from: { opacity: 0, transform: 'scale(1.1)' },
		config: { duration: 700, easing: easings.easeOutQuart },
		leave: { opacity: 0, transform: 'scale(1.1)' },
		immediate: mobileDisabled && isMobile,
		delay,
	});

	return <animated.div style={props}>{children}</animated.div>;
}
