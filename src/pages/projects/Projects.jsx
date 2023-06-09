import { useTranslation } from 'react-i18next';
import ProjectList from './project-list/ProjectList';
import PageHeader from '../../components/page-header/PageHeader';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import projectsJSON from '../../assets/projects.json';
import PageContainer from '../../components/page-container/PageContainer';
import classes from './projects.module.scss';

export default function Projects() {
	const { t } = useTranslation();

	return (
		<PageContainer>
			<div className={classes.projects}>
				<PageHeader title={t('pages.projects.title')} SVG={AiOutlineFolderOpen} />
				<ProjectList projects={projectsJSON} />
			</div>
		</PageContainer>
	);
}
