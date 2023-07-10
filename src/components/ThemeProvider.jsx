import { useState, useCallback, useEffect } from 'react';
import { themeContext } from '../other/themeContext';

export default function ThemeProvider({ children }) {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
	const [isDark, setIsDark] = useState(localStorage.getItem('isDark') === 'true');

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 600);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const toggleTheme = useCallback(() => {
		setIsDark((prev) => {
			const newTheme = !prev;
			localStorage.setItem('isDark', newTheme);
			return newTheme;
		});
	}, []);

	return (
		<themeContext.Provider value={{ isMobile, isDark, toggleTheme }}>
			{children}
		</themeContext.Provider>
	);
}
