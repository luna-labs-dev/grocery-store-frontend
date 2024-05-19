import { useState } from 'react';
import { MarketForm } from '@/view/pages/market/components';
import { Dialog, DialogTitle, DialogHeader, DialogContent, DialogTrigger } from '@/view/components';

interface NewMarketDialogProps {
  triggerName: string;
}

export const NewMarketDialog = ({ triggerName }: NewMarketDialogProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="items-center justify-center hidden w-full h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 md:inline-flex ">
        {triggerName}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo Mercado</DialogTitle>
        </DialogHeader>
        <MarketForm
          updateProps={{
            setOpen: setOpen,
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
