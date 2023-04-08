import { useContext } from 'react';
import { themeContext } from '../../other/themeContext';
import classes from './skills.module.scss';
import {
	Css,
	Express,
	Html,
	Javascript,
	React,
	Redux,
	Typescript,
} from '../export-skills/ExportSkills';

export default function Skills() {
	const { isDark } = useContext(themeContext);

	return (
		<ul className={isDark ? classes.skills_dark : classes.skills_light}>
			<li>
				<Html />
			</li>
			<li>
				<Css />
			</li>
			<li>
				<Javascript />
			</li>
			<li>
				<Typescript />
			</li>
			<li>
				<React />
			</li>
			<li>
				<Redux />
			</li>
			<li>
				<Express />
			</li>
		</ul>
	);
}
