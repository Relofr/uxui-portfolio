import { createWebHistory, createRouter } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
import TracyAviaryView from './views/TracyAviaryView.vue';
import UsdaView from './views/UsdaView.vue';
import DailyUiView from './views/DailyUiView.vue';
import EsportsView from './views/EsportsView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/projects',
		name: 'projects',
		component: ProjectsView

	},
	{
		path: '/tracy-aviary',
		name: 'tracy aviary',
		component: TracyAviaryView
	},
	{
		path: '/usda',
		name: 'USDA',
		component: UsdaView
	},
	{
		path: '/megabattles',
		name: 'Esports',
		component: EsportsView
	},
	{
		path: '/daily-ui',
		name: 'dailyui',
		component: DailyUiView
	},
	{
		path: '/about',
		name: 'about',
		component: AboutView,
	},
	{
		path: '/contact',
		name: 'contact',
		component: ContactView,
	}
];

const router = createRouter({
    history: createWebHistory(process.env.NODE_ENV === '/uxui-portfolio/'),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})

export default router;