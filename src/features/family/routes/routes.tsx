import { RouteObject } from 'react-router-dom';
import { FamilyRoute } from './family-route';

export const familyRoutes: RouteObject[] = [
  {
    path: '/family/',
    element: <FamilyRoute />,
  },
  {
    path: '/family/:familyAction',
    element: <FamilyRoute />,
  },
];
