import { useContext } from 'react';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';
import ThemeSwitcher from '../theme-switcher/ThemeSwitcher';
import { themeContext } from '../../other/themeContext';
import { SlSpeech as MailSVG } from 'react-icons/sl';
import { BsTelephone as PhoneSVG } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import HideBurger from '../hide-burger/HideBurger';
import {
	AiOutlineFileDone as ResumeSVG,
	AiOutlineFolderOpen as ProjectsSVG,
	AiOutlineHome as HomeSVG,
} from 'react-icons/ai';
import { MdOutlineKeyboardDoubleArrowLeft as CurrentSVG } from 'react-icons/md';
import { RiMessage2Line as FeedbackSVG } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import classes from './burger-menu.module.scss';

const links = [
	{ to: '/', localesPath: 'pages.home.links.home', SVG: HomeSVG },
	{ to: '/resume', localesPath: 'pages.home.links.resume', SVG: ResumeSVG },
	{ to: '/projects', localesPath: 'pages.home.links.projects', SVG: ProjectsSVG },
	{ to: '/feedback', localesPath: 'pages.home.links.feedback', SVG: FeedbackSVG },
];

export default function BurgerMenu() {
	const { t } = useTranslation();
	const { isDark, isMobile, isBurger, setIsBurger } = useContext(themeContext);
	if (!isMobile) return null;

	const location = useLocation();

	const linkHandler = () => {
		window.scrollTo({ top: 0 });
		setIsBurger(false);
	};

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
					{links.map((link) => (
						<li key={link.to}>
							<Link
								to={link.to}
								onClick={linkHandler}
								style={link.to === location.pathname ? { fontWeight: 700 } : {}}
							>
								<link.SVG />
								{t(link.localesPath)}
								{link.to === location.pathname && <CurrentSVG />}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className={classes.settings}>
				<LanguageSwitcher />
				<ThemeSwitcher />
			</div>
		</div>
	);
}
