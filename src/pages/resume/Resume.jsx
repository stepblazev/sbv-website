import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { themeContext } from '../../other/themeContext';
import BackHome from '../../components/back-home/BackHome';
import { AiOutlineFileDone } from 'react-icons/ai';
import Skills from '../../components/skills/Skills';
import FadeIn from '../../animations/FadeIn';
import SlideIn from '../../animations/SlideIn';
import ImageLoader from '../../components/image-loader/ImageLoader';
import saitama from '../../assets/images/saitama.png';
import classes from './resume.module.scss';

export default function Resume() {
	const { t } = useTranslation();
	const { isDark } = useContext(themeContext);

	return (
		<FadeIn>
			<div className={isDark ? classes.resume_dark : classes.resume_light}>
				<div className={classes.menu}>
					<BackHome />
					<h1>
						<AiOutlineFileDone />
						{t('pages.resume.title')}
					</h1>
				</div>
				<div className={classes.avatar}>
					<SlideIn delay={250}>
						<div className={classes.avatarImage}>
							<ImageLoader src={saitama} />
						</div>
					</SlideIn>
					<div className={classes.avatarInfo}>
						<h1 className={classes.avatarName}>{t('about.myname')}</h1>
						<h2 className={classes.avatarJob}>{t('about.job')}</h2>
					</div>
				</div>
				<div className={classes.content}>
					<SlideIn delay={500}>
						<Skills />
					</SlideIn>
					<div className={classes.contentText}>
						<p
							dangerouslySetInnerHTML={{
								__html: t('pages.resume.content.p1'),
							}}
						></p>
						<p
							dangerouslySetInnerHTML={{
								__html: t('pages.resume.content.p2'),
							}}
						></p>
						<p
							dangerouslySetInnerHTML={{
								__html: t('pages.resume.content.p3'),
							}}
						></p>
					</div>
				</div>
			</div>
		</FadeIn>
	);
}
