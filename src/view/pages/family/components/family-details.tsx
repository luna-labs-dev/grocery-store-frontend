import { getInitials } from '@/domain';
import { useGetFamilyQuery } from '@/infrastructure';
import { Avatar, AvatarFallback, AvatarImage, Button } from '@/view/components';
import { useFirebase } from '@/view/providers/firebase';
import { Icon } from '@iconify/react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { toast } from 'sonner';
import { RemoveFamilyMemberAlertDialog } from './remove-family-member-alert-dialog';

export const FamilyDetails = () => {
  const { data, isLoading } = useGetFamilyQuery();
  const { isFamilyOwner } = useFirebase();

  const loggedOwner = isFamilyOwner(data?.owner?.externalId);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!data) {
    return <div>Família não encontrada</div>;
  }

  return (
    <div className="w-fit pt-4">
      <section className="flex flex-col gap-8 justify-between">
        <div className="">
          <h1 className="text-2xl font-bold">{data.name}</h1>
          <p className="text-sm text-slate-600">{data.description}Descrição teste</p>
        </div>

        <div className="flex gap-2 items-start">
          <Icon icon="mingcute:calendar-2-line" />
          <div className="flex flex-col gap-0">
            <span className="text-xs font-bold">criado em</span>
            <p className="text-sm">
              {format(data.createdAt, 'EEEEEE - dd/MM/yyyy HH:mm:ss ', { locale: ptBR })}
            </p>
          </div>
        </div>

        <div className="flex gap-2 items-start">
          <Icon icon="octicon:code-of-conduct-24" />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold">codigo de convite</span>
            <div className="flex gap-2 border w-fit p-2 rounded-lg">
              <span className="tracking-wider">{data.inviteCode}</span>
              <div className="flex gap-1 items-center">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6"
                  onClick={() => {
                    navigator.clipboard.writeText(data.inviteCode);
                    toast('Código de convite copiado para a área de transferência', {
                      position: 'top-center',
                      invert: true,
                    });
                  }}
                >
                  <Icon icon="gravity-ui:copy" />
                </Button>
                {/* <Button size="icon" variant="outline" className="h-6 w-6">
                  <Icon icon="material-symbols:refresh" />
                </Button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <Icon icon="icon-park-outline:family" />
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold">membros</span>
            <div className="flex flex-col gap-2">
              {data.members?.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center space-x-4 min-w-[20rem] justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={member.picture} />
                        <AvatarFallback>
                          {getInitials({
                            fullName: member.name,
                            initialsLength: 2,
                            upperCase: true,
                          })}
                        </AvatarFallback>
                      </Avatar>
                      {member.id === data.owner.id && (
                        <div className="bg-yellow-300 absolute -top-2 -right-2 rounded-full p-1 shadow-md">
                          <Icon icon="ph:crown" fontSize=".7rem" />
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-none">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                    </div>
                  </div>
                  {loggedOwner && member.id !== data.owner.id && (
                    <RemoveFamilyMemberAlertDialog memberId={member.id} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
