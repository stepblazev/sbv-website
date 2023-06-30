import { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { MdOutlinePreview } from 'react-icons/md';
import { skillDictionary } from '../../../skills/Skills';
import ImageLoader from '../../../components/_UI/image-loader/ImageLoader';
import noImage from '../../../assets/images/image-not-found.png';
import classes from './project-item.module.scss';

export default function ProjectItem({ project }) {
	const { t } = useTranslation();

	const [previewSource, setPreviewSource] = useState(noImage);

	useEffect(() => {
		const loadImage = async () => {
			if (!project.preview) return;
			try {
				const image = await import(`../../../assets/images/${project.preview}`);
				setPreviewSource(image.default);
			} catch (error) {
				console.error('Failed to load preview:', error);
			}
		};
		loadImage();
	});

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
			<div className={classes.itemImages}>
				<ImageLoader src={previewSource} />
			</div>
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
