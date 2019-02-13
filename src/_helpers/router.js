import Vue from 'vue';
import Router from 'vue-router';
import config from "config";

import HomePage from '../home/HomePage'
import LoginPage from '../login/LoginPage'

Vue.use(Router);

console.log(config.baseUrl);
export const router = new Router({
  base: config.baseUrl,
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');

  if (!loggedIn) {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    if(authRequired) {
      return next('/login');
    }
  }

  next();
})
