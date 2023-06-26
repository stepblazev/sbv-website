import { AiOutlineSend } from 'react-icons/ai';
import classes from './feedback-form.module.scss';

export default function FeedbackForm() {
	const onSubmit = (e) => {
		e.preventDefault();
	};

	// USING "formspree" service
	return (
		<form action='https://formspree.io/f/meqbjgjn' method='POST' className={classes.form}>
			<label className={classes.form__email}>
				<h2>Ваш E-Mail</h2>
				<input required type='email' name='email' placeholder='E-mail' />
			</label>
			<label className={classes.form__message}>
				<h2>Ваше сообщение</h2>
				<textarea required name='message' placeholder='Сообщение' />
			</label>
			<div className={classes.form__controls}>
				<button type='submit'>
					<span>Отправить</span>
					<AiOutlineSend />
				</button>
			</div>
		</form>
	);
}
