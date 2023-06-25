import { useState } from 'react';
import classes from './feedback-form.module.scss';

export default function FeedbackForm() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
	};

	const emailChange = (e) => {
		setEmail(e.target.value);
	};

	const messageChange = (e) => {
		setMessage(e.target.value);
	};

	return (
		<form className={classes.form} onSubmit={onSubmit}>
			<div className={classes.form__email}>
				<h2>Ваш адрес электронной почты</h2>
				<input type='text' placeholder='E-mail' value={email} onChange={emailChange} />
			</div>
			<div className={classes.form__message}>
				<h2>Ваше сообщение</h2>
				<textarea placeholder='Ваше сообщение' value={message} onChange={messageChange} />
			</div>
			<div className={classes.form__controls}>
				<button type='submit'>Отправить</button>
			</div>
		</form>
	);
}
