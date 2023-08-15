import BackHome from '../back-home/BackHome';
import classes from './page-header.module.scss';

export default function PageHeader({ title, SVG }) {
	return (
		<div className={classes.header}>
			<BackHome />
			<h1 className={classes.header__title}>
				<SVG />
				{title}
			</h1>
		</div>
	);
}
