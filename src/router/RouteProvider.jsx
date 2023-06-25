import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from '../pages/home/Home';
import Resume from '../pages/resume/Resume';
import Projects from '../pages/projects/Projects';
import Feedback from '../pages/feedback/Feedback';

const router = createBrowserRouter([
	{ path: '*', element: <Navigate to='/' /> },
	{ path: '/', element: <Home /> },
	{ path: '/resume', element: <Resume /> },
	{ path: '/projects', element: <Projects /> },
	{ path: '/feedback', element: <Feedback /> },
]);

export default function RouteProvider() {
	return <RouterProvider router={router} />;
}
