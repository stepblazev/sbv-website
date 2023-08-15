import { useContext } from 'react';
import { themeContext } from '../../../other/themeContext';
import { VscChromeClose as CloseSVG } from 'react-icons/vsc';
import classes from './hide-burger.module.scss';

export default function HideBurger() {
	const { setIsBurger, isBurger } = useContext(themeContext);

	return (
		<button
			className={[classes.hide, isBurger ? classes.opened : classes.hidden].join(' ')}
			onClick={() => setIsBurger(false)}
		>
			<CloseSVG />
		</button>
	);
}
