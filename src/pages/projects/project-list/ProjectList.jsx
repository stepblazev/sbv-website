import ProjectItem from '../project-item/ProjectItem';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';
import { themeContext } from '../../../other/themeContext';
import classes from './project-list.module.scss';

const _limit = 6;

export default function ProjectList({ projects }) {
	const { t } = useTranslation();
	const { isMobile } = useContext(themeContext);

	const [page, setPage] = useState(0);
	const [localProjects, setLocalProjects] = useState(
		projects.slice(page * _limit, page * _limit + _limit)
	);

	useEffect(() => {
		window.scrollTo({ top: 0 });
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
					<ProjectItem
						key={project.id}
						project={project}
						style={{
							animationDelay: `${(isMobile ? index : index + 1) * 200 + 150}ms`,
						}}
					/>
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
