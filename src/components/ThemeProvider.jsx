import { useState, useCallback } from 'react';
import { themeContext } from '../other/themeContext';

export default function ThemeProvider({ children }) {
	const [isDark, setIsDark] = useState(localStorage.getItem('isDark') === 'true');

	const toggleTheme = useCallback(() => {
		setIsDark((prev) => {
			const newTheme = !prev;
			localStorage.setItem('isDark', newTheme);
			return newTheme;
		});
	}, []);

	return (
		<themeContext.Provider value={{ isDark, toggleTheme }}>
			{children}
		</themeContext.Provider>
	);
}
