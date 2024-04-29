import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useFirebase } from '@/view/providers/firebase';
import {
  Drawer,
  Button,
  DrawerTitle,
  DrawerHeader,
  DrawerFooter,
  DrawerContent,
  DrawerTrigger,
} from '@/view/components';

export const Navigation = () => {
  const { signOut } = useFirebase();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigationItems = (
    <div className="px-4">
      <ul className="flex flex-col gap-2">
        <li>
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            to={'/market'}
          >
            Market
          </Link>
        </li>
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
      </ul>
    </div>
  );

  const newVersion = (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
      <DrawerTrigger className="p-4">
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
