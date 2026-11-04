import { createWebHistory, createRouter } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
import TracyAviaryView from './views/TracyAviaryView.vue';
import UsdaView from './views/UsdaView.vue';
import DailyUiView from './views/DailyUiView.vue';
import EsportsView from './views/EsportsView.vue';
import DotaView from './views/DotaView.vue';
import AlianzaView from './views/AlianzaView.vue';
import { waitForPageEnter } from './pageTransition';

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
		path: '/alianza',
		name: 'alianza',
		component: AlianzaView
	},
	{
		path: '/dota-analytics',
		name: 'dota analytics',
		component: DotaView
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
    // Clicking a link (project, nav item) starts the new page at the top.
    // Browser back/forward restores where you were, e.g. your spot in the projects list.
    // Both wait for the page fade so the scroll lands on the new content.
    async scrollBehavior(to, from, savedPosition) {
        if (to.path === from.path) return false;
        await waitForPageEnter();
        return savedPosition || { top: 0 };
    }
})

export default router;