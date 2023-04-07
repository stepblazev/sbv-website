import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { themeContext } from '../../other/themeContext';
import BackHome from '../../components/back-home/BackHome';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import classes from './projects.module.scss';
import FadeIn from '../../animations/FadeIn';
import projects from './projects.json';

export default function Projects() {
	const { t } = useTranslation();
	const { isDark } = useContext(themeContext);

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
				<div className={classes.list}>
					{projects.map((project) => (
						<div className={classes.listItem}>
							<div>
								<a href={project.github} target='_blank'>
									Репозиторий
								</a>
								{Boolean(project.ghPages) && (
									<a href={project.ghPages} target='_blank'>
										Демо
									</a>
								)}
							</div>
							<img src={project.preview.desktop} alt='DESKTOP' />
							<img src={project.preview.mobile} alt='MOBILE' />
						</div>
					))}
				</div>
			</div>
		</FadeIn>
	);
}
