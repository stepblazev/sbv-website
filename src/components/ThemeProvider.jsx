import { useState, useCallback, useEffect } from 'react';
import { themeContext } from '../other/themeContext';

export default function ThemeProvider({ children }) {
	const [isDark, setIsDark] = useState(localStorage.getItem('isDark') === 'true');
	const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
	const [isBurger, setIsBurger] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			const newIsMobile = window.innerWidth < 600;
			setIsMobile(newIsMobile);
			setIsBurger((prev) => (newIsMobile ? prev : false));
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		document.body.style.overflow = isBurger ? 'hidden' : 'auto';
	}, [isBurger]);

	const toggleTheme = useCallback(() => {
		setIsDark((prev) => {
			const newTheme = !prev;
			localStorage.setItem('isDark', newTheme);
			return newTheme;
		});
	}, []);

	return (
		<themeContext.Provider value={{ isDark, toggleTheme, isBurger, setIsBurger, isMobile }}>
			{children}
		</themeContext.Provider>
	);
}
