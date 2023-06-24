import { useContext } from 'react';
import {
	SlSocialVkontakte,
	SlSocialSteam,
	SlSocialLinkedin,
	SlSocialGithub,
	SlSpeech,
} from 'react-icons/sl';
import { themeContext } from '../../other/themeContext';
import classes from './fixed-links.module.scss';

const links = [
	{ link: 'https://github.com/stepblazev', Svg: SlSocialGithub },
	{ link: 'https://vk.com/zhohvatuk', Svg: SlSocialVkontakte },
	{ link: 'https://www.linkedin.com/in/eugene-ohvatuk-152103267/', Svg: SlSocialLinkedin },
	{ link: 'https://steamcommunity.com/id/stepblazev', Svg: SlSocialSteam },
	{ link: 'mailto:ohvatuki@gmail.com', Svg: SlSpeech },
];

export default function FixedLinks() {
	const { isDark } = useContext(themeContext);

	return (
		<div className={isDark ? classes.fixed_dark : classes.fixed_light}>
			{links.map((l) => (
				<a key={l.link} href={l.link}>
					<l.Svg />
				</a>
			))}
		</div>
	);
}
