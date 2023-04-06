import { useTranslation } from 'react-i18next';
import { BiErrorAlt } from 'react-icons/bi';
import { useContext } from 'react';
import { themeContext } from '../../other/themeContext';
import classes from './not-found.module.scss';
import BackHome from '../../components/back-home/BackHome';

export default function NotFound() {
	const { isDark } = useContext(themeContext);
	const { t } = useTranslation();

	return (
		<div className={isDark ? classes.notfound_dark : classes.notfound_light}>
			<BackHome />
			<div className={isDark ? classes.message_dark : classes.message_light}>
				<div className={classes.icon}>
					<BiErrorAlt />
					404
				</div>
				<p className={classes.text}>{t('pages.404.message')}</p>
			</div>
		</div>
	);
}
