import { CreateFamilyParams, Family, HttpError, JoinFamilyParams, errorMapper } from '@/domain';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';
import { httpCreateFamily, httpJoinFamily } from '../http';

export const useCreateFamilyMutation = () => {
  const mutation = useMutation<Family, AxiosError | HttpError, CreateFamilyParams>({
    mutationFn: (params: CreateFamilyParams) => httpCreateFamily(params),

    onError: (error, params) => {
      const { title, description } = errorMapper(error.code ?? '')(params);

      toast.error(title, {
        description,
      });
    },

    onSuccess: (_, params) => {
      toast.success('Família criada', {
        description: `a família "${params.name}" foi criada com sucesso`,
      });
    },
  });

  return { ...mutation };
};

export const useJoinFamilyMutation = () => {
  const mutation = useMutation<void, AxiosError | HttpError, JoinFamilyParams>({
    mutationFn: (params: JoinFamilyParams) => httpJoinFamily(params),

    onError: (error, params) => {
      const { title, description } = errorMapper(error.code ?? '')(params);

      toast.error(title, {
        description,
      });
    },

    onSuccess: () => {
      toast.success('Entrou na família', { description: 'Agora você faz parte da família' });
    },
  });

  return { ...mutation };
};
