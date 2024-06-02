import {
  Button,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/view/components';
import { useFirebase } from '@/view/providers/firebase';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const { signOut } = useFirebase();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigationItems = (
    <div className="px-4">
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            to={'/'}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            to={'/market'}
          >
            Mercados
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            to={'/shopping-event'}
          >
            Eventos de compra
          </Link>
        </li>
      </ul>
    </div>
  );

  const newVersion = (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
      <DrawerTrigger>
        <Icon icon="mingcute:menu-line" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Grocery Store</DrawerTitle>
        </DrawerHeader>
        {navigationItems}
        <DrawerFooter>
          <Button
            variant={'outline'}
            className="flex gap-1"
            onClick={() => {
              signOut();
            }}
          >
            <Icon icon="mingcute:exit-line" />
            Sair
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
  return newVersion;
};
