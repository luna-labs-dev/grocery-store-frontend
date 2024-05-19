import { useState } from 'react';
import { cn } from '@/view/lib/utils';
import { MarketForm } from '@/view/pages/market/components';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from '@/view/components';

interface UpdateMarketDialogProps {
  options: {
    triggerName: string;
    marketId: string;
    fullWidth?: boolean;
  };
}
export const UpdateMarketDialog = ({ options }: UpdateMarketDialogProps) => {
  const { triggerName, marketId, fullWidth } = options;

  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={cn('hidden md:block', fullWidth && 'w-full')} size={'sm'}>
          {triggerName}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo Mercado</DialogTitle>
        </DialogHeader>
        <MarketForm updateProps={{ setOpen, marketId }} />
      </DialogContent>
    </Dialog>
  );
};
