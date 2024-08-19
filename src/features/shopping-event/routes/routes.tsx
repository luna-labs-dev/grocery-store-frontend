import { RouteObject } from 'react-router-dom';
import { ShoppingEventDetailsRoute } from './shopping-event-details-route';
import { ShoppingEventListRoute } from './shopping-event-list';

export const shoppingEventRoutes: RouteObject[] = [
  {
    path: '/shopping-event',
    element: <ShoppingEventListRoute />,
  },
  {
    path: '/shopping-event/ongoing/:shoppingEventId',
    element: <ShoppingEventDetailsRoute />,
  },
];
