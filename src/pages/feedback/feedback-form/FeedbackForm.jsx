import { AiOutlineSend } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { BiMessageDetail } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { themeContext } from '../../../other/themeContext';
import classes from './feedback-form.module.scss';

export default function FeedbackForm() {
	const { t } = useTranslation();
	const { isDark } = useContext(themeContext);

	// USING "formspree" service
	return (
		<form action='https://formspree.io/f/meqbjgjn' method='POST' className={classes.form}>
			<label className={!isDark ? classes.form__email : classes.form__email_dark}>
				<h2>
					<FiMail />
					{t('pages.feedback.email')}
				</h2>
				<input
					required
					type='email'
					name='email'
					placeholder={t('pages.feedback.email_placeholder')}
				/>
			</label>
			<label className={!isDark ? classes.form__message : classes.form__message_dark}>
				<h2>
					<BiMessageDetail />
					{t('pages.feedback.message')}
				</h2>
				<textarea
					required
					name='message'
					placeholder={t('pages.feedback.message_placeholder')}
				/>
			</label>
			<div className={classes.form__controls}>
				<button type='submit'>
					<span>{t('pages.feedback.send')}</span>
					<AiOutlineSend />
				</button>
			</div>
		</form>
	);
}
