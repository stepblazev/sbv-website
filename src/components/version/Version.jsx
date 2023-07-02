import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { themeContext } from '../../other/themeContext';
import application from '../../../package.json';
import classes from './version.module.scss';

export default function Version() {
	const { t } = useTranslation();
	const { isDark } = useContext(themeContext);

	return (
		<p className={isDark ? classes.version_dark : classes.version_light}>
			{t('version')} {application.version}
		</p>
	);
}
