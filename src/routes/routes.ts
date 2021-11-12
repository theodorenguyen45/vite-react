import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

interface Route {
  path: string;
  name: string;
  exact: boolean;
  element: any;
  props?: any;
}

const routes: Route[] = [
  {
    path: '/',
    name: 'Home Page',
    element: HomePage,
    exact: true,
  },
  {
    path: '/about',
    name: 'About Page',
    element: AboutPage,
    exact: true,
  },
];

export default routes;
