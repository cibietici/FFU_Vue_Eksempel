import Home from './views/Home.vue';
import Users from './views/Users.vue';
import Comps from './views/Comps.vue';

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'users', path: '/users', component: Users},
	{ name: 'comps', path: '/components', component: Comps},
];
