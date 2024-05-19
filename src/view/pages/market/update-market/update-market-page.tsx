import { useParams } from 'react-router-dom';

import { MarketForm } from '../components';

export const UpdateMarketPage = () => {
  const { marketId } = useParams();
  return (
    <div className="py-4">
      <MarketForm updateProps={{ marketId }} />
    </div>
  );
};
