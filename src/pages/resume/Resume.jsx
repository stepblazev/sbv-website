import { useTranslation } from 'react-i18next';
import { AiOutlineFileDone } from 'react-icons/ai';
import PageHeader from '../../components/page-header/PageHeader';
import PageContainer from '../../components/page-container/PageContainer';
import ExtraContent from '../../components/_UI/extra-content/ExtraContent';
import { VscSettingsGear as SkillsSVG } from 'react-icons/vsc';
import { AiOutlineExperiment as EducSVG } from 'react-icons/ai';
import { RiFileUserLine as CommonSVG } from 'react-icons/ri';
import ProfileCard from './profile-card/ProfileCard';
import classes from './resume.module.scss';

export default function Resume() {
	const { t } = useTranslation();

	return (
		<PageContainer>
			<div className={classes.resume}>
				<PageHeader title={t('pages.resume.title')} SVG={AiOutlineFileDone} />
				<div className={classes.resume__content}>
					<ProfileCard />
					<div className={classes.resume__contentArticles}>
						<ExtraContent
							title={t('pages.resume.content.common.title')}
							ICON={CommonSVG}
						>
							<article
								dangerouslySetInnerHTML={{
									__html: t('pages.resume.content.common.value'),
								}}
							></article>
						</ExtraContent>
						<ExtraContent
							title={t('pages.resume.content.skills.title')}
							ICON={SkillsSVG}
						>
							<article
								dangerouslySetInnerHTML={{
									__html: t('pages.resume.content.skills.value'),
								}}
							></article>
						</ExtraContent>
						<ExtraContent
							title={t('pages.resume.content.experience.title')}
							ICON={EducSVG}
						>
							<article
								dangerouslySetInnerHTML={{
									__html: t('pages.resume.content.experience.value'),
								}}
							></article>
						</ExtraContent>
					</div>
				</div>
			</div>
		</PageContainer>
	);
}
