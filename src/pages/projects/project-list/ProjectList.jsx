import ProjectItem from '../project-item/ProjectItem';
import SlideIn from '../../../animations/SlideIn';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';
import classes from './project-list.module.scss';

const _limit = 4;

export default function ProjectList({ projects }) {
	const { t } = useTranslation();

	const [page, setPage] = useState(0);
	const [localProjects, setLocalProjects] = useState(
		projects.slice(page * _limit, page * _limit + _limit)
	);

	useEffect(() => {
		setLocalProjects(projects.slice(page * _limit, page * _limit + _limit));
	}, [page]);

	const backHandler = () => {
		setPage((prev) => prev - 1);
	};

	const nextHandler = () => {
		setPage((prev) => prev + 1);
	};

	return (
		<>
			<div className={classes.list}>
				{localProjects.map((project, index) => (
					<SlideIn key={project.id} delay={index * 200 + 150}>
						<ProjectItem project={project} />
					</SlideIn>
				))}
			</div>
			{projects.length > _limit && (
				<div className={classes.pagination}>
					<p className={classes.pagination__page}>
						{t('pages.projects.page')}: {page + 1}
					</p>
					<div className={classes.pagination__controls}>
						{page !== 0 && (
							<button onClick={backHandler}>
								<BsArrowLeftSquare />
								<span>{t('pages.projects.back')}</span>
							</button>
						)}
						{page !== Math.ceil(projects.length / 4) - 1 && (
							<button onClick={nextHandler}>
								<span>{t('pages.projects.next')}</span>
								<BsArrowRightSquare />
							</button>
						)}
					</div>
				</div>
			)}
		</>
	);
}
