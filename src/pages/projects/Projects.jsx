import { useTranslation } from 'react-i18next';
import ProjectList from './project-list/ProjectList';
import PageHeader from '../../components/page-header/PageHeader';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import projectsJSON from '../../assets/projects.json';
import Tabs from '../../components/_UI/tabs/Tabs';
import FadeIn from '../../animations/FadeIn';
import PageContainer from '../../components/page-container/PageContainer';
import classes from './projects.module.scss';

export default function Projects() {
	const { t } = useTranslation();

	const clientProjects = projectsJSON.filter((p) => p.type === 'client');
	const serverProjects = projectsJSON.filter((p) => p.type === 'server');

	return (
		<FadeIn>
			<PageContainer>
				<div className={classes.projects}>
					<PageHeader title={t('pages.projects.title')} SVG={AiOutlineFolderOpen} />
					<ProjectList projects={projectsJSON} />
					{/* <Tabs
						data={[
							{
								title: t('pages.projects.client'),
								element: <ProjectList projects={clientProjects} />,
							},
							{
								title: t('pages.projects.server'),
								element: <ProjectList projects={serverProjects} />,
							},
						]}
					/> */}
				</div>
			</PageContainer>
		</FadeIn>
	);
}
