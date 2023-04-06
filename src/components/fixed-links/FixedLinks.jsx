import { useContext } from 'react';
import { SlSocialVkontakte, SlSocialSteam, SlSocialLinkedin } from 'react-icons/sl';
import { SiGmail } from 'react-icons/si';
import { themeContext } from '../../other/themeContext';
import classes from './fixed-links.module.scss';

export default function FixedLinks() {
	const { isDark } = useContext(themeContext);

	return (
		<div className={isDark ? classes.fixed_dark : classes.fixed_light}>
			<a href='https://steamcommunity.com/id/stepblazev' target='_blank'>
				<SlSocialSteam />
			</a>
			<a href='https://vk.com/zhohvatuk' target='_blank'>
				<SlSocialVkontakte />
			</a>
			<a
				href='https://www.linkedin.com/in/eugene-ohvatuk-152103267/'
				target='_blank'
			>
				<SlSocialLinkedin />
			</a>
			<a href='mailto:ohvatuki@gmail.com'>
				<SiGmail />
			</a>
		</div>
	);
}
