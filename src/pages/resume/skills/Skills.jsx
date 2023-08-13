import { useContext } from 'react';
import { themeContext } from '../../../other/themeContext';
import classes from './skills.module.scss';
import {
	Css,
	Express,
	Html,
	Javascript,
	Mui,
	React,
	Redux,
	Typescript,
} from '../../../skills/Skills';

const skillsList = [Html, Css, Javascript, Typescript, React, Redux, Express, Mui];

export default function Skills() {
	const { isDark } = useContext(themeContext);

	return (
		<ul className={isDark ? classes.skills_dark : classes.skills_light}>
			{skillsList.map((Skill, index) => (
				<li key={index} style={{ animationDelay: `${index * 200 + 200}ms` }}>
					<Skill />
				</li>
			))}
		</ul>
	);
}
