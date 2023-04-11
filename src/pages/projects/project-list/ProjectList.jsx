import ProjectItem from '../project-item/ProjectItem';
import SlideIn from '../../../animations/SlideIn';
import classes from './project-list.module.scss';
import { useEffect } from 'react';

export default function ProjectList({ projects }) {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);

	return (
		<div className={classes.list}>
			{projects.map((project, index) => (
				<SlideIn key={project.id} delay={index * 200 + 150}>
					<ProjectItem project={project} />
				</SlideIn>
			))}
		</div>
	);
}
