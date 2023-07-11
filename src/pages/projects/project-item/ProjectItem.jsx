import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { MdOutlinePreview } from 'react-icons/md';
import { skillDictionary } from '../../../skills/Skills';
import noImage from '../../../assets/images/image-not-found.png';
import ProjectImages from './ProjectImages';
import classes from './project-item.module.scss';

export default function ProjectItem({ project, ...props }) {
	const { t } = useTranslation();

	return (
		<div className={classes.item} {...props}>
			<h2 className={classes.itemName}>{project.name}</h2>
			<div className={classes.itemLinks}>
				<a href={project.github} target='_blank'>
					<RiGitRepositoryLine />
					{t('pages.projects.repo')}
				</a>
				{Boolean(project.ghPages) && (
					<a href={project.ghPages} target='_blank'>
						<MdOutlinePreview />
						{t('pages.projects.demo')}
					</a>
				)}
			</div>
			{project.preview.length === 0 ? (
				<ProjectImages images={[noImage]} />
			) : (
				<ProjectImages images={project.preview} />
			)}

			{Boolean(project.tech) && (
				<div className={classes.itemTech}>
					{project.tech.split(',').map((t) => (
						<Fragment key={t}>{skillDictionary[t.trim()]}</Fragment>
					))}
				</div>
			)}
		</div>
	);
}
