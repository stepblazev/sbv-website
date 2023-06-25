import BackHome from '../back-home/BackHome';
import classes from './page-header.module.scss';

export default function PageHeader({ title, SVG }) {
	return (
		<div className={classes.header}>
			<BackHome />
			<h1>
				<SVG />
				{title}
			</h1>
		</div>
	);
}
