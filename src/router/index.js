import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '@/layouts/Default.vue';

const routes = [
  {
    path: '/',
    name: 'Root',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
