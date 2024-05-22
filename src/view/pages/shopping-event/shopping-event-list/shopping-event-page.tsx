import { Button } from '@/view/components';

import { ShoppingEventList } from './components/shopping-event-list';

export const ShoppingEventPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-end gap-2 pt-2 sm:gap-0 sm:flex-row">
        <div>
          <Button className="w-full">Novo evento</Button>
        </div>
      </div>
      <ShoppingEventList />
    </div>
  );
};
