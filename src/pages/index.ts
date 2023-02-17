import { RouteRecordRaw } from 'vue-router';
import RoutingComponent from './index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('./home/index.vue'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('./auth'),
  },
];

export { RoutingComponent };
