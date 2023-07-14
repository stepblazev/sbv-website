import { Navigate, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Resume from '../pages/resume/Resume';
import Projects from '../pages/projects/Projects';
import Feedback from '../pages/feedback/Feedback';

const routes = [
	{ path: '*', element: <Navigate to='/' /> },
	{ path: '/', element: <Home /> },
	{ path: '/resume', element: <Resume /> },
	{ path: '/projects', element: <Projects /> },
	{ path: '/feedback', element: <Feedback /> },
];

export default function Router() {
	return (
		<Routes>
			{routes.map((route) => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
		</Routes>
	);
}
