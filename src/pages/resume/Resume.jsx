import { useTranslation } from 'react-i18next';
import { AiOutlineFileDone } from 'react-icons/ai';
import Skills from './skills/Skills';
import SlideIn from '../../animations/SlideIn';
import ImageLoader from '../../components/_UI/image-loader/ImageLoader';
import user from '../../assets/images/no-avatar.png';
import photo from '../../assets/images/photo.webp';
import PageHeader from '../../components/page-header/PageHeader';
import FadeIn from '../../animations/FadeIn';
import PageContainer from '../../components/page-container/PageContainer';
import { useContext } from 'react';
import { themeContext } from '../../other/themeContext';
import classes from './resume.module.scss';

export default function Resume() {
	const { t } = useTranslation();
	const { isDark } = useContext(themeContext);

	return (
		<FadeIn mobileDisabled={true}>
			<PageContainer>
				<div className={classes.resume}>
					<PageHeader title={t('pages.resume.title')} SVG={AiOutlineFileDone} />
					<div className={classes.info}>
						<h1 className={classes.infoName}>{t('about.myname')}</h1>
						<h2 className={classes.infoJob}>{t('about.job')}</h2>
					</div>
					<div className={classes.content}>
						<div className={classes.contentImage}>
							<SlideIn delay={250}>
								<div className={classes.avatar}>
									<ImageLoader src={photo} />
									<div
										className={
											isDark
												? classes.avatar__years_dark
												: classes.avatar__years_light
										}
									>
										{t('pages.resume.age')}
									</div>
								</div>
							</SlideIn>
							<SlideIn delay={500}>
								<Skills />
							</SlideIn>
						</div>
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
							<p
								dangerouslySetInnerHTML={{
									__html: t('pages.resume.content.p4'),
								}}
							></p>
						</div>
					</div>
				</div>
			</PageContainer>
		</FadeIn>
	);
}
