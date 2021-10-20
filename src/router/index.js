import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/email',
    name: 'Email',
    component: () => import('../views/Email.vue')
  }, {
    path: '/phone',
    name: 'Phone',
    component: () => import('../views/Phone.vue')
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: () => import('../views/Certificates.vue')
  }, {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  }, {
    path: '/social-media',
    name: 'SocialMedia',
    component: () => import('../views/SocialMedia.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


let isFirstRedirect = true;

router.beforeEach((to, from, next) => {

  const lastVisitedPage = localStorage.getItem('lastVisitedPage');
  const onLastVisitedPage = lastVisitedPage == to.name;
  const executableRedirect = (!lastVisitedPage || onLastVisitedPage || !isFirstRedirect) ? false : true;

  isFirstRedirect = false;

  executableRedirect ? next({ name: lastVisitedPage }) : next();

});

router.afterEach(to => localStorage.setItem('lastVisitedPage', to.name));

export default router
