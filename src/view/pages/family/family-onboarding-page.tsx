import { useGetFamilyQuery } from '@/infrastructure';
import { Button } from '@/view/components';
import { useEffect, useState } from 'react';
import { FamilyOnboarding } from './components';

export const FamilyOnboardingPage = () => {
  const { data, isLoading, error } = useGetFamilyQuery();

  const [isFamilyMember, setIsFamilyMember] = useState<boolean>(false);

  useEffect(() => {
    if (error?.code === 'USER_NOT_A_FAMILY_MEMBER_ERROR') {
      setIsFamilyMember(false);
    }
    if (!error) {
      setIsFamilyMember(true);
    }
  }, [error]);

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

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  const joinFamily = (
    <FamilyOnboarding.Sheet
      trigger={<Button>Entrar em uma família</Button>}
      context={{
        title: 'Entrar em uma família',
        description: 'Entre em uma família existente para interagir com o sistema',
      }}
    >
      <FamilyOnboarding.JoinForm />
    </FamilyOnboarding.Sheet>
  );

  if (isFamilyMember && data) {
    return (
      <div>
        <div>{data.name}</div>
        <div>
          {data.members?.map((member) => (
            <div key={member.id}>
              {member.displayName} - {member.email}
            </div>
          ))}
        </div>
      </div>
    );
  }

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
