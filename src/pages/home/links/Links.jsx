import { AiOutlineFileDone as ResumeSVG, AiOutlineFolderOpen as ProjectsSVG } from 'react-icons/ai';
import { RiMessage2Line as FeedbackSVG } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classes from './links.module.scss';

export default function Links() {
	const { t } = useTranslation();

	return (
		<ul className={classes.links}>
			<li className={classes.linksItem}>
				<Link to='/resume'>
					<ResumeSVG />
					{t('pages.home.links.resume')}
				</Link>
			</li>
			<li className={classes.linksItem}>
				<Link to='/projects'>
					<ProjectsSVG />
					{t('pages.home.links.projects')}
				</Link>
			</li>
			<li className={classes.linksItem}>
				<Link to='/feedback'>
					<FeedbackSVG />
					{t('pages.home.links.feedback')}
				</Link>
			</li>
		</ul>
	);
}
