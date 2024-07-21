import { Button } from '@/view/components';
export const FamilyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 pt-8">
      <div className="flex flex-col gap-4 w-[400px] border p-4 rounded-lg">
        <h1 className="text-sm">
          Para interagir com o sistema, você precisa criar ou entrar em uma família
        </h1>
        <Button>Criar uma família</Button>
        <Button>Entrar em uma família</Button>
      </div>
    </div>
  );
};
