import { useState } from 'react';
import Loader from '../loader/Loader';
import classes from './image-loader.module.scss';

export default function ImageLoader({ src, position }) {
	const [loaded, setLoaded] = useState(false);

	function handleImageLoad() {
		setLoaded(true);
	}

	return (
		<div className={classes.image}>
			{!loaded && (
				<div className={classes.loader}>
					<Loader />
				</div>
			)}
			<img
				src={src}
				onLoad={handleImageLoad}
				style={{ opacity: loaded ? '1' : '0', objectPosition: position ?? 'top' }}
			/>
		</div>
	);
}
