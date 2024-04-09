import { lazy } from 'react';
import { RouteProps } from './routes.types';

const Users = lazy(() => import('@/pages/Users'));
const UserForm = lazy(() => import('@/pages/Users/UserForm'));

const routes: RouteProps[] = [
  {
    key: 'users',
    path: '/',
    component: Users,
    children: [
      {
        key: 'user-form',
        path: '/form',
        component: UserForm,
      },
    ],
  },
];

export { routes };
