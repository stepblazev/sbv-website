import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import classes from './back-home.module.scss';

export default function BackHome() {
	const { t } = useTranslation();

	return (
		<div className={classes.back}>
			<Link to='/'>
				<AiOutlineArrowLeft />
				{t('back-home')}
			</Link>
		</div>
	);
}
