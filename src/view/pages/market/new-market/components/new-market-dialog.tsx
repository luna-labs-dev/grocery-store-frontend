import { Dialog, DialogTitle, DialogHeader, DialogContent, DialogTrigger } from '@/view/components';

import { NewMarketForm } from './new-market-form';

interface NewMarketDialogProps {
  triggerName: string;
}

export const NewMarketDialog = ({ triggerName }: NewMarketDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger className="hidden md:block">{triggerName}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo Mercado</DialogTitle>
        </DialogHeader>
        <NewMarketForm />
      </DialogContent>
    </Dialog>
  );
};
