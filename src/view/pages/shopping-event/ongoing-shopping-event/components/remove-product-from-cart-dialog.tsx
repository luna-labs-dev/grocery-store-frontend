import { Product, fCurrency } from '@/domain';
import { useRemoveProductFromCartMutation } from '@/infrastructure';
import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogDescription,
} from '@/view/components';

interface RemoveProductFromCartDialogProps {
  children: React.ReactElement;
  shoppingEventId: string;
  product: Product;
}
export const RemoveProductFromCartDialog = ({
  children,
  shoppingEventId,
  product,
}: RemoveProductFromCartDialogProps) => {
  const { mutateAsync } = useRemoveProductFromCartMutation();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Remover produto do carrinho?</AlertDialogTitle>
          <AlertDialogDescription>{`${product.name} - ${product.amount} x ${product.amount >= (product.wholesaleMinAmount ?? 0) && !!product.wholesalePrice ? fCurrency(product.wholesalePrice) : fCurrency(product.price)}`}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              await mutateAsync({
                shoppingEventId,
                productId: product.id,
              });
            }}
          >
            Confirmar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
