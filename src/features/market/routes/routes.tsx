import { RouteObject } from 'react-router-dom';
import { MarketRoute } from './market-route';
import { NewMarketRoute } from './new-market-route';
import { UpdateMarketRoute } from './update-market-route';

export const marketRoutes: RouteObject[] = [
  {
    path: '/market',
    element: <MarketRoute />,
  },
  {
    path: '/market/new',
    element: <NewMarketRoute />,
  },
  {
    path: '/market/update/:marketId',
    element: <UpdateMarketRoute />,
  },
];
