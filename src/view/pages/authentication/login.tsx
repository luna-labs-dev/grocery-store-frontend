import { Button } from '@/view/components';
import { useFirebase } from '@/view/providers/firebase';

export const Login = () => {
  const { context, signinWithGoogle, signOut } = useFirebase();

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2">
        <Button
          onClick={async () => {
            await signinWithGoogle();
          }}
        >
          Login
        </Button>

        <Button
          variant={'secondary'}
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </Button>
      </div>
      {context.currentUser && (
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1>{context.currentUser.displayName}</h1>
          </div>
          <img src={context.currentUser.photoURL ?? undefined} className="w-32" alt="" />
        </div>
      )}
    </div>
  );
};
