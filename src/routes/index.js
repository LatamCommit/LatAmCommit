import Home from '../pages/Home.js';
import Blog from '../pages/Blog.js';
import Collaborator from '../pages/Collaborator.js';
import Error404 from '../pages/Error404.js';

const routes = {
	'/': Home,
	'/blog': Blog,
	'/collaborator': Collaborator,
};

const router = () => {
	const $main = document.getElementById('main');
	let route = getRoute(location.hash);
	console.log(`route: ${route}`);
	let render = routes[route] ? routes[route] : Error404;
	$main.innerHTML = render();
};

const getRoute = (hash) => {
	return `/${hash.slice(1).split('/')[1] || ''}`;
};

export default router;
