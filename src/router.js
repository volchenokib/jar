import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Agencies from './views/Agencies.vue';
import InHouse from './views/InHouse.vue';
import Features from './views/Features.vue';
import Join from './views/Join.vue';
import Blog from './views/Blog.vue';
import More from './views/More.vue';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/agencies',
      name: 'Agencies',
      component: Agencies
    },
    {
      path: '/in-house',
      name: 'InHouse',
      component: InHouse
    },

    {
      path: '/features/',
      name: 'Features',
      component: Features
    },

    {
      path: '/join',
      name: 'Join',
      component: Join
    },

    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
});
