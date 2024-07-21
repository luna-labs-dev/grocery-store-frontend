import { Button } from '@/view/components';
import { FamilyOnboardingSheet } from './container';
export const FamilyOnboardingPage = () => {
  const createFamily = (
    <FamilyOnboardingSheet
      trigger={<Button>Criar uma família</Button>}
      context={{
        title: 'Criar uma família',
        description: 'Crie uma nova família para interagir com o sistema',
      }}
    >
      <h1>Criar uma família</h1>
    </FamilyOnboardingSheet>
  );

  const joinFamily = (
    <FamilyOnboardingSheet
      trigger={<Button>Entrar em uma família</Button>}
      context={{
        title: 'Entrar em uma família',
        description: 'Entre em uma família existente para interagir com o sistema',
      }}
    >
      <h1>Entrar em uma família</h1>
    </FamilyOnboardingSheet>
  );

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 pt-8">
      <div className="flex flex-col gap-4 w-[400px] border p-4 rounded-lg">
        <h1 className="text-sm">
          Para interagir com o sistema, você precisa criar ou entrar em uma família
        </h1>
        {createFamily}
        {joinFamily}
      </div>
    </div>
  );
};
