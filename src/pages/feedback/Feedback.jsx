import { useContext } from 'react';
import { RiMessage2Line } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { themeContext } from '../../other/themeContext';
import classes from './feedback.module.scss';
import BackHome from '../../components/back-home/BackHome';

export default function Feedback() {
	const { t } = useTranslation();
	const { isDark } = useContext(themeContext);

	return (
		<div className={isDark ? classes.feedback_dark : classes.feedback_light}>
			<div className={classes.menu}>
				<BackHome />
				<h1>
					<RiMessage2Line />
					{t('pages.feedback.title')}
				</h1>
			</div>
		</div>
	);
}
