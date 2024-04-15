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

  const navigationItems = (
    <div className="px-4">
      <ul className="flex flex-col gap-2">
        <li>
          <Link to={'/market'}>Market</Link>
        </li>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
      </ul>
    </div>
  );

  const newVersion = (
    <Drawer direction="left">
      <DrawerTrigger className="absolute p-4">
        <Icon icon="mingcute:menu-line" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Current Page</DrawerTitle>
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
