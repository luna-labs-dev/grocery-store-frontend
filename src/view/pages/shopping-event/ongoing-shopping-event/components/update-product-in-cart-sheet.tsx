import { useState } from 'react';
import { Product } from '@/domain';
import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetDescription,
} from '@/view/components';

import { ProductForm } from './product-form';

interface UpdateProductInCartSheetProps {
  children: React.ReactElement;
  shoppingEventId: string;
  product: Product;
}
export const UpdateProductInCartSheet = ({
  children,
  shoppingEventId,
  product,
}: UpdateProductInCartSheetProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle>Adicionar Produto</SheetTitle>
          <SheetDescription>Adicionar um novo produto ao carrinho</SheetDescription>
        </SheetHeader>
        <ProductForm shoppingEventId={shoppingEventId} setOpen={setOpen} product={product} />
      </SheetContent>
    </Sheet>
  );
};
