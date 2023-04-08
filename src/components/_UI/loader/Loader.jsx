import { RxGear } from 'react-icons/rx';
import { GoGear } from 'react-icons/go';
import classes from './loader.module.scss';

export default function Loader() {
	return (
		<div className={classes.loader}>
			<RxGear className={classes.loaderGearTop} />
			<GoGear className={classes.loaderGearBottom} />
		</div>
	);
}
