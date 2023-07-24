import { ImInfo as InfoSVG } from 'react-icons/im';
import { useContext, useRef, useState, useEffect } from 'react';
import { themeContext } from '../../../other/themeContext';
import classes from './extra-content.module.scss';

export default function ExtraContent({
	ICON = InfoSVG,
	title = 'No title',
	defaultOpened = false,
	children,
}) {
	const { isDark } = useContext(themeContext);

	const contentRef = useRef();
	const [opened, setOpened] = useState(defaultOpened);

	const clickHandler = () => {
		setOpened((prev) => !prev);
	};

	useEffect(() => {
		contentRef.current.style.height = opened
			? `${contentRef.current.firstChild.offsetHeight}px`
			: '0';
	}, [opened]);

	return (
		<article className={[isDark ? classes.extra_dark : classes.extra_light].join(' ')}>
			<button className={classes.control} onClick={clickHandler}>
				<ICON />
				<span className={classes.control__title}>{title}</span>
				<div className={[classes.more, opened && classes.more_hide].join(' ')}></div>
			</button>
			<div
				ref={contentRef}
				className={[classes.content, !opened && classes.content_hidden].join(' ')}
			>
				{children}
			</div>
		</article>
	);
}
