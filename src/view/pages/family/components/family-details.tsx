import { useGetFamilyQuery } from '@/infrastructure';
import { Avatar, AvatarFallback, AvatarImage, Button } from '@/view/components';
import { Icon } from '@iconify/react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const FamilyDetails = () => {
  const { data, isLoading } = useGetFamilyQuery();

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
        <div className="flex gap-4">
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
            <Icon icon="fluent:checkbox-person-24-regular" />
            <div className="flex flex-col gap-0">
              <span className="text-xs font-bold">criado por</span>
              <p className="text-sm">{data.createdBy}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-start">
          <Icon icon="octicon:code-of-conduct-24" />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold">codigo de convite</span>
            <div className="flex gap-2 border w-fit p-2 rounded-lg">
              <span className="tracking-wider">{data.inviteCode}</span>
              <div className="flex gap-1 items-center">
                <Button size="icon" variant="outline" className="h-6 w-6">
                  <Icon icon="gravity-ui:copy" />
                </Button>
                <Button size="icon" variant="outline" className="h-6 w-6">
                  <Icon icon="material-symbols:refresh" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-start">
          <Icon icon="ph:crown" />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold">Lider da família</span>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/avatars/01.png" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">{data.owner.displayName}</p>
                <p className="text-sm text-muted-foreground">{data.owner.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-start">
          <Icon icon="icon-park-outline:family" />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold">membros</span>
            <div className="flex flex-col gap-2">
              {data.members?.map((member) => (
                <div key={member.id} className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/avatars/01.png" />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">{member.displayName}</p>
                    <p className="text-sm text-muted-foreground">{member.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
