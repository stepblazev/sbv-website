import { useState } from 'react';
import ImageLoader from '../../../components/_UI/image-loader/ImageLoader';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { useSwipeable } from 'react-swipeable';
import classes from './project-item.module.scss';

export default function ProjectImages({ images }) {
	const [slide, setSlide] = useState(0);

	const previous = () => {
		if (slide != 0) setSlide((prev) => prev - 1);
	};

	const next = () => {
		if (slide != images.length - 1) setSlide((prev) => prev + 1);
	};

	const swipeHandlers = useSwipeable({
		onSwipedLeft: next,
		onSwipedRight: previous,
		preventScrollOnSwipe: true,
	});

	return (
		<div className={classes.images}>
			<div
				className={classes.images__container}
				style={{ width: `${images.length * 100}%`, marginLeft: `-${100 * slide}%` }}
				{...swipeHandlers}
			>
				{images.map((src) => (
					// FIXME aspect-ration | preloader
					<a key={src} target='_blank' href={src} className={classes.images__image}>
						<ImageLoader src={src} />
					</a>
				))}
			</div>
			{images.length > 1 && (
				<div className={classes.images__controls}>
					<button
						disabled={slide === 0}
						onClick={previous}
						style={{ transform: 'rotate(180deg)' }}
					>
						<MdOutlineNavigateNext />
					</button>
					<p className={classes.images__page}>
						{slide + 1} / {images.length}
					</p>
					<button disabled={slide === images.length - 1} onClick={next}>
						<MdOutlineNavigateNext />
					</button>
				</div>
			)}
		</div>
	);
}
