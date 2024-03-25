import { Button } from '@/view/components';

import { useFirebase } from '../providers/firebase';
export const HomePage = () => {
  const { signOut } = useFirebase();
  return (
    <div>
      <h1>Home Page</h1>
      <Button
        variant={'secondary'}
        onClick={() => {
          signOut();
        }}
      >
        Sair
      </Button>
    </div>
  );
};
