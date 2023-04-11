import { Fragment, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { themeContext } from '../../../other/themeContext';
import classes from './tabs.module.scss';

export default function Tabs({ data }) {
	const { isDark } = useContext(themeContext);
	const { t } = useTranslation();

	const [page, setPage] = useState(0);

	return (
		<div className={isDark ? classes.tabs_dark : classes.tabs_light}>
			<div className={classes.radio}>
				{data.map((item, index) => (
					<div key={item.title} className={classes.radioItem}>
						<input
							type='radio'
							name='type'
							id={`type-${index}`}
							defaultChecked={index === 0}
							onChange={() => setPage(index)}
						/>
						<label htmlFor={`type-${index}`}>{item.title}</label>
					</div>
				))}
			</div>
			{data.map(
				(item, index) =>
					index === page && <Fragment key={item.title}>{item.element}</Fragment>
			)}
		</div>
	);
}
