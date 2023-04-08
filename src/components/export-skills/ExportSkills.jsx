import {
	SiSass,
	SiJavascript,
	SiTypescript,
	SiExpress,
	SiHtml5,
	SiAxios,
	SiNodedotjs,
	SiPostgresql,
	SiJsonwebtokens,
} from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';
import { FaReact, FaGulp } from 'react-icons/fa';
import classes from './export-skills.module.scss';

export const skillDictionary = {
	html: <Html />,
	css: <Css />,
	js: <Javascript />,
	ts: <Typescript />,
	react: <React />,
	redux: <Redux />,
	express: <Express />,
	axios: <Axios />,
	node: <Node />,
	sql: <Sql />,
	jwt: <Jwt />,
	gulp: <Gulp />,
};

export function Html() {
	return (
		<div className={classes.skill}>
			<SiHtml5 />
			HTML5
		</div>
	);
}

export function Css() {
	return (
		<div className={classes.skill}>
			<SiSass />
			CSS / SASS
		</div>
	);
}

export function Javascript() {
	return (
		<div className={classes.skill}>
			<SiJavascript />
			JavaScript
		</div>
	);
}

export function Typescript() {
	return (
		<div className={classes.skill}>
			<SiTypescript />
			TypeScript
		</div>
	);
}

export function React() {
	return (
		<div className={classes.skill}>
			<FaReact />
			React
		</div>
	);
}

export function Redux() {
	return (
		<div className={classes.skill}>
			<TbBrandRedux />
			Redux
		</div>
	);
}

export function Express() {
	return (
		<div className={classes.skill}>
			<SiExpress />
			Express
		</div>
	);
}

export function Axios() {
	return (
		<div className={classes.skill}>
			<SiAxios />
			Axios
		</div>
	);
}

export function Node() {
	return (
		<div className={classes.skill}>
			<SiNodedotjs />
			Node
		</div>
	);
}

export function Sql() {
	return (
		<div className={classes.skill}>
			<SiPostgresql />
			SQL
		</div>
	);
}

export function Jwt() {
	return (
		<div className={classes.skill}>
			<SiJsonwebtokens />
			JWT
		</div>
	);
}

export function Gulp() {
	return (
		<div className={classes.skill}>
			<FaGulp />
			Gulp
		</div>
	);
}
