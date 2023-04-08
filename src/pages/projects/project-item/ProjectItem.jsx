import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { MdOutlinePreview } from 'react-icons/md';
import { skillDictionary } from '../../../components/export-skills/ExportSkills';
import ImageLoader from '../../../components/image-loader/ImageLoader';
import classes from './project-item.module.scss';

export default function ProjectItem({ project }) {
	const { t, i18n } = useTranslation();
	const [showDesc, setShowDesc] = useState(false);

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
					<ImageLoader src={project.preview.desktop} />
					{/* <ImageLoader src={project.preview.mobile} /> */}
				</div>
			)}
			{Boolean(project.tech) && (
				<div className={classes.itemTech}>
					{project.tech.split(',').map((t) => (
						<Fragment key={t}>{skillDictionary[t.trim()]}</Fragment>
					))}
				</div>
			)}
			{Boolean(project.description) && (
				<Fragment>
					<button
						onClick={() => setShowDesc((prev) => !prev)}
						className={classes.itemShowBtn}
					>
						{showDesc ? t('pages.projects.hide') : t('pages.projects.more')}
					</button>
					<div
						className={classes.itemDesc}
						style={
							showDesc
								? {
										height: '120px',
										overflowY: 'scroll',
								  }
								: { height: '0px' }
						}
					>
						{project.description[i18n.language]}
					</div>
				</Fragment>
			)}
		</div>
	);
}
