import { useState } from 'react';
import ImageLoader from '../../../components/_UI/image-loader/ImageLoader';
import { MdOutlineNavigateNext } from 'react-icons/md';
import classes from './project-item.module.scss';
import { useSwipeable } from 'react-swipeable';

export default function ProjectImages({ images }) {
	const [slide, setSlide] = useState(0);

	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => {
			if (slide != images.length - 1) setSlide((prev) => prev + 1);
		},
		onSwipedRight: () => {
			if (slide != 0) setSlide((prev) => prev - 1);
		},
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
					<div key={src} target='_blank' href={src} className={classes.image}>
						<ImageLoader src={src} />
					</div>
				))}
			</div>
			{images.length > 1 && (
				<div className={classes.images__controls}>
					<button
						disabled={slide === 0}
						onClick={() => setSlide((prev) => prev - 1)}
						style={{ transform: 'rotate(180deg)' }}
					>
						<MdOutlineNavigateNext />
					</button>
					<p className={classes.images__page}>
						{slide + 1} / {images.length}
					</p>
					<button
						disabled={slide === images.length - 1}
						onClick={() => setSlide((prev) => prev + 1)}
					>
						<MdOutlineNavigateNext />
					</button>
				</div>
			)}
		</div>
	);
}
