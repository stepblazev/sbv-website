import { RiMessage2Line } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import PageHeader from '../../components/page-header/PageHeader';
import PageContainer from '../../components/page-container/PageContainer';
import classes from './feedback.module.scss';
import FeedbackForm from './feedback-form/FeedbackForm';

export default function Feedback() {
	const { t } = useTranslation();

	return (
		<PageContainer>
			<div className={classes.feedback}>
				<PageHeader title={t('pages.feedback.title')} SVG={RiMessage2Line} />
				<FeedbackForm />
			</div>
		</PageContainer>
	);
}
