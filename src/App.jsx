import Layout from './components/layout/Layout';
import ThemeProvider from './components/ThemeProvider';
import RouteProvider from './router/RouteProvider';

export default function App() {
	return (
		<ThemeProvider>
			<Layout>
				<RouteProvider />
			</Layout>
		</ThemeProvider>
	);
}
