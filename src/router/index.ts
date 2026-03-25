import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ProjectsPage from '../pages/ProjectsPage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage
    },
    {
      path: '/projects/:id',
      name: 'project-detail',
      component: ProjectDetailPage
    }
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }

    return {
      top: 0
    };
  }
});

export default router;
