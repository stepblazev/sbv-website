import { useContext } from 'react';
import { themeContext } from '../../other/themeContext';
import { TfiMenu as MenuSVG } from 'react-icons/tfi';
import classes from './open-burger.module.scss';

export default function OpenBurger() {
	const { isDark, setIsBurger, isBurger } = useContext(themeContext);

	return (
		<button
			className={[
				isDark ? classes.open_dark : classes.open_light,
				isBurger ? classes.opened : classes.hidden,
			].join(' ')}
			onClick={() => setIsBurger(true)}
		>
			<MenuSVG />
		</button>
	);
}
