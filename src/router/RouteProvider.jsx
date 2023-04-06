import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home/Home';
import NotFound from '../pages/not-found/NotFound';
import Resume from '../pages/resume/Resume';
import Projects from '../pages/projects/Projects';

const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/resume', element: <Resume /> },
	{ path: '/projects', element: <Projects /> },
	{ path: '*', element: <NotFound /> },
]);

export default function RouteProvider() {
	return <RouterProvider router={router} />;
}
