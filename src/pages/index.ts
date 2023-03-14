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
  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/error/errors/error404.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
  {
    path: '/forbidden',
    name: 'forbidden',
    component: () => import('@/pages/error/errors/error403.vue'),
  },
  {
    path: '/developing',
    name: 'developing',
    component: () => import('@/pages/error/errors/inDeveloping.vue'),
  },
  {
    path: '/groups_users',
    name: 'group_users',
    component: () => import('@/pages/groupUsers'),
  },
  {
    path: '/groups_users/create_group',
    name: 'create_group',
    component: () => import('@/pages/createGroup/index.vue'),
  },
  {
    path: '/groups_users/create_group/add_user',
    name: 'add_user',
    component: () => import('@/pages/addUserToGroup/index.vue'),
  },
];

export { RoutingComponent };
