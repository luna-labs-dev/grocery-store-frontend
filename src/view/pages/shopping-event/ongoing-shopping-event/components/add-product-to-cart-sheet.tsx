import { useState } from 'react';
import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetDescription,
} from '@/view/components';

import { ProductForm } from './product-form';

interface AddProductToCartSheetProps {
  children: React.ReactElement;
  shoppingEventId: string;
}
export const AddProductToCartSheet = ({
  children,
  shoppingEventId,
}: AddProductToCartSheetProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle>Adicionar Produto</SheetTitle>
          <SheetDescription>Adicionar um novo produto ao carrinho</SheetDescription>
        </SheetHeader>
        <ProductForm shoppingEventId={shoppingEventId} setOpen={setOpen} />
      </SheetContent>
    </Sheet>
  );
};
