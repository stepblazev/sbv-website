import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { themeContext } from '../../other/themeContext';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import classes from './back-home.module.scss';

export default function BackHome() {
	const { isDark } = useContext(themeContext);
	const { t } = useTranslation();

	return (
		<div className={isDark ? classes.back_dark : classes.back_light}>
			<Link to='/'>
				<AiOutlineArrowLeft />
				{t('back-home')}
			</Link>
		</div>
	);
}
