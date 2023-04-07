import { SiSass, SiJavascript, SiTypescript, SiExpress, SiHtml5 } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { useContext } from 'react';
import { themeContext } from '../../other/themeContext';
import classes from './skills.module.scss';

export default function Skills() {
	const { isDark } = useContext(themeContext);

	return (
		<ul className={isDark ? classes.skills_dark : classes.skills_light}>
			<li>
				<SiHtml5 />
				HTML5
			</li>
			<li>
				<SiSass />
				CSS / SASS
			</li>
			<li>
				<SiJavascript />
				JavaScript
			</li>
			<li>
				<SiTypescript />
				TypeScript
			</li>
			<li>
				<FaReact />
				React
			</li>
			<li>
				<TbBrandRedux />
				Redux
			</li>
			<li>
				<SiExpress />
				Express
			</li>
		</ul>
	);
}
