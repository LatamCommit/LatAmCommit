import Error404 from '../pages/Error404.js';
import routes from './routes.js';

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
