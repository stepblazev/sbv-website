import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { MdOutlinePreview } from 'react-icons/md';
import { skillDictionary } from '../../../skills/Skills';
import ImageLoader from '../../../components/_UI/image-loader/ImageLoader';
import classes from './project-item.module.scss';

export default function ProjectItem({ project }) {
	const { t } = useTranslation();

	return (
		<div className={classes.item}>
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
			{Boolean(project.preview) && (
				<div className={classes.itemImages}>
					<ImageLoader
						position={project.type === 'client' ? 'top' : 'center'}
						src={project.preview.desktop}
					/>
				</div>
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
