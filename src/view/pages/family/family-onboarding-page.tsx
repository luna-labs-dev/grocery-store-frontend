import { Button } from '@/view/components';
import { FamilyOnboarding } from './components';
export const FamilyOnboardingPage = () => {
  const createFamily = (
    <FamilyOnboarding.Sheet
      trigger={<Button>Criar uma família</Button>}
      context={{
        title: 'Criar uma família',
        description: 'Crie uma nova família para interagir com o sistema',
      }}
    >
      <FamilyOnboarding.CreateForm />
    </FamilyOnboarding.Sheet>
  );

  const joinFamily = (
    <FamilyOnboarding.Sheet
      trigger={<Button>Entrar em uma família</Button>}
      context={{
        title: 'Entrar em uma família',
        description: 'Entre em uma famí lia existente para interagir com o sistema',
      }}
    >
      <h1>Entrar em uma família</h1>
    </FamilyOnboarding.Sheet>
  );

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 pt-8">
      <div className="flex flex-col gap-8 w-[400px] border p-4 rounded-lg">
        <h1 className="text-sm">
          Para interagir com o sistema, você precisa criar ou entrar em uma família
        </h1>
        <div className="flex flex-col gap-4">
          {createFamily}
          {joinFamily}
        </div>
      </div>
    </div>
  );
};
