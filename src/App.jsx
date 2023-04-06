import Layout from './components/Layout';
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
