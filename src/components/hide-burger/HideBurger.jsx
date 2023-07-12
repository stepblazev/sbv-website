import { useContext } from 'react';
import { themeContext } from '../../other/themeContext';
import { VscChromeClose as CloseSVG } from 'react-icons/vsc';
import classes from './hide-burger.module.scss';

export default function HideBurger() {
	const { isDark, setIsBurger, isBurger } = useContext(themeContext);

	return (
		<button
			className={[
				isDark ? classes.hide_dark : classes.hide_light,
				isBurger ? classes.opened : classes.hidden,
			].join(' ')}
			onClick={() => setIsBurger(false)}
		>
			<CloseSVG />
		</button>
	);
}
