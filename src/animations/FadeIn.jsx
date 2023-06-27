import { useSpring, animated, easings } from 'react-spring';

export default function FadeIn({ children }) {
	const isMobile = window.innerWidth < 600;

	const props = useSpring({
		opacity: 1,
		transform: 'translateY(0px)',
		from: { opacity: 0, transform: 'translateY(-50px)' },
		config: { duration: 700, easing: easings.easeOutQuart },
		leave: { opacity: 0, transform: 'translateY(50px)' },
		immediate: isMobile,
	});

	return <animated.div style={props}>{children}</animated.div>;
}
