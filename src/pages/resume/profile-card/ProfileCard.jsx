import { themeContext } from '../../../other/themeContext';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import ImageLoader from '../../../components/_UI/image-loader/ImageLoader';
import photo from '../../../assets/images/photo.webp';
import Skills from '../skills/Skills';
import classes from './profile-card.module.scss';

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
			<div className={classes.skills}>
				<Skills />
			</div>
		</div>
	);
}
