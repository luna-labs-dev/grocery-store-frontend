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
}
export const AddProductToCartSheet = ({ children }: AddProductToCartSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Adicionar Produto</SheetTitle>
          <SheetDescription>Adicionar um novo produto ao carrinho</SheetDescription>
        </SheetHeader>
        <ProductForm />
      </SheetContent>
    </Sheet>
  );
};
