import ProjectItem from '../project-item/ProjectItem';
import SlideIn from '../../animations/SlideIn';
import classes from './project-list.module.scss';

export default function ProjectList({ projects }) {
	return (
		<div className={classes.list}>
			{projects.map((project, index) => (
				<SlideIn key={project.id} delay={index * 200}>
					<ProjectItem project={project} />
				</SlideIn>
			))}
		</div>
	);
}
