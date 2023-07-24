import { useTranslation } from 'react-i18next';
import { AiOutlineFileDone } from 'react-icons/ai';
import Skills from './skills/Skills';
import ImageLoader from '../../components/_UI/image-loader/ImageLoader';
import photo from '../../assets/images/photo.webp';
import PageHeader from '../../components/page-header/PageHeader';
import PageContainer from '../../components/page-container/PageContainer';
import { useContext } from 'react';
import { themeContext } from '../../other/themeContext';
import ExtraContent from '../../components/_UI/extra-content/ExtraContent';
import { VscSettingsGear as SkillsSVG } from 'react-icons/vsc';
import { AiOutlineExperiment as EducSVG } from 'react-icons/ai';
import { RiFileUserLine as CommonSVG } from 'react-icons/ri';
import classes from './resume.module.scss';

export default function Resume() {
	const { t } = useTranslation();
	const { isDark } = useContext(themeContext);

	return (
		<PageContainer>
			<div className={classes.resume}>
				<PageHeader title={t('pages.resume.title')} SVG={AiOutlineFileDone} />
				<div className={classes.info}>
					<h1 className={classes.infoName}>{t('about.myname')}</h1>
					<h2 className={classes.infoJob}>{t('about.job')}</h2>
				</div>
				<div className={classes.content}>
					<div className={classes.contentImage}>
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
						<div className={classes.content__skills}>
							<Skills />
						</div>
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
						{/* <ExtraContent
							title='Общая информация'
							defaultOpened={true}
							ICON={CommonSVG}
						>
							<p
								dangerouslySetInnerHTML={{
									__html: t('pages.resume.content.p1'),
								}}
							></p>
						</ExtraContent>
						<ExtraContent
							title='Навыки и технологии разработки'
							defaultOpened={true}
							ICON={SkillsSVG}
						>
							<p
								dangerouslySetInnerHTML={{
									__html: t('pages.resume.content.p2'),
								}}
							></p>
						</ExtraContent>
						<ExtraContent
							title='Образование и опыт работы'
							defaultOpened={true}
							ICON={EducSVG}
						>
							<p
								dangerouslySetInnerHTML={{
									__html: t('pages.resume.content.p3'),
								}}
							></p>
						</ExtraContent>
						<ExtraContent title='Дополнительная информация' defaultOpened={true}>
							<p
								dangerouslySetInnerHTML={{
									__html: t('pages.resume.content.p4'),
								}}
							></p>
						</ExtraContent> */}
					</div>
				</div>
			</div>
		</PageContainer>
	);
}
