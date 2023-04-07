import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { themeContext } from '../../other/themeContext';
import BackHome from '../../components/back-home/BackHome';
import saitama from '../../assets/images/saitama.png';
import classes from './resume.module.scss';
import Skills from '../../components/skills/Skills';

export default function Resume() {
	const { t } = useTranslation();
	const { isDark } = useContext(themeContext);

	return (
		<div className={isDark ? classes.resume_dark : classes.resume_light}>
			<BackHome />
			<div className={classes.avatar}>
				<img src={saitama} alt='MY IMAGE' />
				<div className={classes.avatarInfo}>
					<h1 className={classes.avatarName}>{t('about.myname')}</h1>
					<h2 className={classes.avatarJob}>{t('about.job')}</h2>
				</div>
			</div>
			<div className={classes.content}>
				<Skills />
				<div className={classes.contentText}>
					<p>{t('pages.home.welcome.p1')}</p>
					<p>{t('pages.home.welcome.p1')}</p>
					<p>{t('pages.home.welcome.p2')}</p>
					<p>{t('pages.home.welcome.p3')}</p>
					<p>{t('pages.home.welcome.p4')}</p>
				</div>
			</div>
		</div>
	);
}
