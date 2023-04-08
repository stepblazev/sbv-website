import { useState } from 'react';
import Loader from '../_UI/loader/Loader';
import classes from './image-loader.module.scss';

export default function ImageLoader({ src }) {
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
				style={{ opacity: loaded ? '1' : '0' }}
			/>
		</div>
	);
}
