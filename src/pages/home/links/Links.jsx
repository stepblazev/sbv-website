import { AiOutlineFileDone, AiOutlineFolderOpen } from 'react-icons/ai';
import { TbBrandGithub } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classes from './links.module.scss';

export default function Links() {
	const { t } = useTranslation();

	return (
		<ul className={classes.links}>
			<li className={classes.linksItem}>
				<a href='https://github.com/stepblazev' target='_blank'>
					<TbBrandGithub />
					{t('pages.home.links.github')}
				</a>
			</li>
			<li className={classes.linksItem}>
				<Link to='/resume'>
					<AiOutlineFileDone />
					{t('pages.home.links.resume')}
				</Link>
			</li>
			<li className={classes.linksItem}>
				<Link to='/projects'>
					<AiOutlineFolderOpen />
					{t('pages.home.links.projects')}
				</Link>
			</li>
		</ul>
	);
}
