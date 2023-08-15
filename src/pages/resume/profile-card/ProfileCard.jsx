import { themeContext } from '../../../other/themeContext';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import ImageLoader from '../../../components/_UI/image-loader/ImageLoader';
import photo from '../../../assets/images/photo.webp';
import Skills from '../skills/Skills';
import classes from './profile-card.module.scss';
import { AiOutlineMail as MailSVG } from 'react-icons/ai';
import { BsTelephone as PhoneSVG } from 'react-icons/bs';
import RoundLink from '../../../components/_UI/round-link/RoundLink';
import { SlSocialLinkedin, SlSocialGithub, SlSocialVkontakte } from 'react-icons/sl';

export default function ProfileCard() {
	const { t } = useTranslation();
	const { isDark } = useContext(themeContext);

	return (
		<div className={isDark ? classes.card_dark : classes.card_light}>
			<div className={classes.avatar}>
				<ImageLoader src={photo} />
			</div>
			<h1 className={classes.name}>{t('pages.resume.name')}</h1>
			<h2 className={classes.career}>{t('pages.resume.career')}</h2>
			<ul className={isDark ? classes.about_dark : classes.about_light}>
				<li>
					{t('pages.resume.age.title')}
					<div></div>
					{t('pages.resume.age.value')}
				</li>
				<li>
					{t('pages.resume.country.title')}
					<div></div>
					{t('pages.resume.country.value')}
				</li>
			</ul>
			<h3 className={classes.hder}>{t('pages.resume.skills')}</h3>
			<Skills />
			<h3 className={classes.hder}>{t('pages.resume.contacts')}</h3>
			<ul className={isDark ? classes.about_dark : classes.about_light}>
				<li>
					<PhoneSVG />
					<div></div>
					<a href='tel:+375447102441'>+375-44-7102441</a>
				</li>
				<li>
					<MailSVG />
					<div></div>
					<a href='mailto:ohvatuki@gmail.com'>ohvatuki@gmail.com</a>
				</li>
			</ul>
			<div className={classes.socials}>
				<RoundLink
					tooltip='LinkedIn'
					ICON={SlSocialLinkedin}
					color='#007dbb'
					href='https://www.linkedin.com/in/eugene-ohvatuk-152103267'
				/>
				<RoundLink
					tooltip='GitHub'
					ICON={SlSocialGithub}
					color='#6e5494'
					href='https://github.com/stepblazev'
				/>
				<RoundLink
					tooltip='VKontakte'
					ICON={SlSocialVkontakte}
					color='#4C75A3'
					href='https://vk.com/zhohvatuk'
				/>
			</div>
		</div>
	);
}
