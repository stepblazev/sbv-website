import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react';
import { themeContext } from '../../other/themeContext';
import ProjectList from '../../components/project-list/ProjectList';
import BackHome from '../../components/back-home/BackHome';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import FadeIn from '../../animations/FadeIn';
import projectsJSON from '../../assets/projects.json';
import classes from './projects.module.scss';

export default function Projects() {
	const { t } = useTranslation();
	const { isDark } = useContext(themeContext);

	const [projects, setProjects] = useState(projectsJSON);

	return (
		<FadeIn>
			<div className={isDark ? classes.projects_dark : classes.projects_light}>
				<div className={classes.menu}>
					<BackHome />
					<h1>
						<AiOutlineFolderOpen />
						{t('pages.projects.title')}
					</h1>
				</div>
				<ProjectList projects={projects} />
			</div>
		</FadeIn>
	);
}
