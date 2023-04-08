import { useContext } from 'react';
import { VscCode } from 'react-icons/vsc';
import Links from './links/Links';
import FadeIn from '../../animations/FadeIn';
import { useTranslation } from 'react-i18next';
import { themeContext } from '../../other/themeContext';
import classes from './home.module.scss';

export default function Home() {
	const { t } = useTranslation();
	const { isDark } = useContext(themeContext);

	return (
		<FadeIn>
			<div className={isDark ? classes.home_dark : classes.home_light}>
				<VscCode className={classes.logo} />
				<Links />
				<div className={classes.text}>
					<p
						dangerouslySetInnerHTML={{ __html: t('pages.home.welcome.p1') }}
					></p>
					<p
						dangerouslySetInnerHTML={{ __html: t('pages.home.welcome.p2') }}
					></p>
					<p
						dangerouslySetInnerHTML={{ __html: t('pages.home.welcome.p3') }}
					></p>
					<p
						dangerouslySetInnerHTML={{ __html: t('pages.home.welcome.p4') }}
					></p>
				</div>
			</div>
		</FadeIn>
	);
}
