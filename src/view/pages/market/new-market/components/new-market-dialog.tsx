import { Dialog, DialogTitle, DialogHeader, DialogContent, DialogTrigger } from '@/view/components';

import { NewMarketForm } from './new-market-form';

interface NewMarketDialogProps {
  triggerName: string;
}

export const NewMarketDialog = ({ triggerName }: NewMarketDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 md:block">
        {triggerName}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo Mercado</DialogTitle>
        </DialogHeader>
        <NewMarketForm />
      </DialogContent>
    </Dialog>
  );
};
