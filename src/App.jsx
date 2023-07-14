import { HashRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ThemeProvider from './components/ThemeProvider';
import Router from './router/RouteProvider';

export default function App() {
	return (
		<HashRouter>
			<ThemeProvider>
				<Layout>
					<Router />
				</Layout>
			</ThemeProvider>
		</HashRouter>
	);
}
