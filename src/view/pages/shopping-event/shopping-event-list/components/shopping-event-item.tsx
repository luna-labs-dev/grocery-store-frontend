import { ShoppingEventListItem } from '@/domain';
import { CircleIcon, ViewGridIcon } from '@radix-ui/react-icons';
import {
  Card,
  Button,
  CardTitle,
  CardHeader,
  CardFooter,
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
      <CardHeader className="flex flex-col p-4">
        <CardTitle className="flex flex-col items-start">{shoppingEvent.market}</CardTitle>
        <CardDescription className="text-sm">{shoppingEvent.status}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex gap-6">
          <div className="grid grid-cols-[20px_1fr] items-start">
            <CircleIcon width={12} height={12} className="translate-y-2" />

            <div className="space-y-1">
              <span className="text-xs font-medium leading-none text-muted-foreground">
                total varejo
              </span>
              <p className="text-sm">{shoppingEvent.totals.retailTotal}</p>
            </div>
          </div>

          <div className="grid grid-cols-[20px_1fr] items-start">
            <ViewGridIcon width={12} height={12} className="translate-y-2" />

            <div className="space-y-1">
              <span className="text-xs font-medium leading-none text-muted-foreground">
                total atacado
              </span>
              <p className="text-sm">{shoppingEvent.totals.wholesaleTotal}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-end justify-between w-full">
          <p className="text-xs text-muted-foreground">{shoppingEvent.createdAt.toISOString()}</p>
          <Button>Detalhes</Button>
        </div>
      </CardFooter>
    </Card>
  );
};
