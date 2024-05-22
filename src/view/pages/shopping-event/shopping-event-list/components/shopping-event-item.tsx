import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CircleIcon, ViewGridIcon } from '@radix-ui/react-icons';
import { fCurrency, getStatus, ShoppingEventListItem } from '@/domain';
import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/view/components';

interface ShoppingEventListItemProps {
  shoppingEvent: ShoppingEventListItem;
}
export const ShoppingEventItem = ({ shoppingEvent }: ShoppingEventListItemProps) => {
  shoppingEvent.createdAt = new Date(shoppingEvent.createdAt);
  return (
    <Card>
      <CardHeader className="flex flex-col p-3">
        <CardTitle className="flex flex-col items-start">{shoppingEvent.market}</CardTitle>
        <CardDescription className="text-sm">{getStatus(shoppingEvent.status)}</CardDescription>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="flex gap-6">
          <div className="grid grid-cols-[20px_1fr] items-start">
            <CircleIcon width={12} height={12} className="translate-y-2" />

            <div className="space-y-1">
              <span className="text-xs font-medium leading-none text-muted-foreground">
                total varejo
              </span>
              <p className="text-sm">{fCurrency(shoppingEvent.totals.retailTotal)}</p>
            </div>
          </div>

          <div className="grid grid-cols-[20px_1fr] items-start">
            <ViewGridIcon width={12} height={12} className="translate-y-2" />

            <div className="space-y-1">
              <span className="text-xs font-medium leading-none text-muted-foreground">
                total atacado
              </span>
              <p className="text-sm">{fCurrency(shoppingEvent.totals.wholesaleTotal)}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-3">
        <div className="flex items-end justify-end w-full">
          <div className="flex flex-col items-end">
            <p className="text-[8pt] font-bold text-muted-foreground">
              {format(shoppingEvent.createdAt, 'HH:mm:ss', { locale: ptBR })}
            </p>
            <p className="text-xs font-bold text-muted-foreground">
              {format(shoppingEvent.createdAt, 'dd MM yyyy', { locale: ptBR })}
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
