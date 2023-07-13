import { useContext } from 'react';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';
import ThemeSwitcher from '../theme-switcher/ThemeSwitcher';
import { themeContext } from '../../other/themeContext';
import { SlSpeech as MailSVG } from 'react-icons/sl';
import { BsTelephone as PhoneSVG } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import HideBurger from '../hide-burger/HideBurger';
import { AiOutlineFileDone as ResumeSVG, AiOutlineFolderOpen as ProjectsSVG } from 'react-icons/ai';
import { RiMessage2Line as FeedbackSVG } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import classes from './burger-menu.module.scss';

export default function BurgerMenu() {
	const { t } = useTranslation();
	const { isDark, isMobile, isBurger } = useContext(themeContext);
	if (!isMobile) return null;

	return (
		<div className={isDark ? classes.burger_dark : classes.burger_light}>
			<div className={classes.header}>
				<div
					className={[
						classes.header__links,
						isBurger ? classes.header__links_opened : classes.header__links_hidden,
					].join(' ')}
				>
					<a className={classes.header__link} href='mailto:ohvatuki@gmail.com'>
						<MailSVG />
					</a>
					<a className={classes.header__link} href='tel:+375447102441'>
						<PhoneSVG />
					</a>
				</div>
				<HideBurger />
			</div>
			<div className={classes.content}>
				<ul className={isBurger ? classes.list__opened : classes.list__hidden}>
					<li>
						<a to='www.google.com'>
							<ResumeSVG />
							{t('pages.home.links.resume')}
						</a>
					</li>
					<li>
						<a to='/projects'>
							<ProjectsSVG />
							{t('pages.home.links.projects')}
						</a>
					</li>
					<li>
						<a to='/feedback'>
							<FeedbackSVG />
							{t('pages.home.links.feedback')}
						</a>
					</li>
				</ul>
			</div>
			<div className={classes.settings}>
				<LanguageSwitcher />
				<ThemeSwitcher />
			</div>
		</div>
	);
}
