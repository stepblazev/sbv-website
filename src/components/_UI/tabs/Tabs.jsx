import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { themeContext } from '../../../other/themeContext';
import classes from './tabs.module.scss';

export default function Tabs({ data }) {
	const { isDark } = useContext(themeContext);
	const { t } = useTranslation();

	return <div className={isDark ? classes.tabs_dark : classes.tabs_light}></div>;
}
