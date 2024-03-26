import { Icon } from '@iconify/react';
import { Button } from '@/view/components';
import { useFirebase } from '@/view/providers/firebase';
export const Login = () => {
  const { signinWithGoogle } = useFirebase();

  return (
    <div className="flex items-center w-full h-full bg-center bg-slate-200 bg-cover bg-[url('../../assets/images/grocery-cart-3.png')]">
      <div className="invisible w-0 md:w-2/3 md:visible"></div>
      <div className="w-full h-screen gap-2 p-6 md:w-1/3 ">
        <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-xl">
          <div className="flex flex-col items-center gap-4 p-4 text-3xl text-white w-80">
            <div className="text-center">
              <h1 className="font-bold">Bem vindo</h1>
            </div>
            <Button
              className="flex justify-between w-48 gap-2"
              onClick={async () => {
                await signinWithGoogle();
              }}
            >
              <Icon icon="mdi:google" />
              Entrar
              <span></span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
