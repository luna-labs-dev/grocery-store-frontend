import { useCreateFamilyMutation } from '@/infrastructure';
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from '@/view/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useFamilyOnboardingContext } from './family-onboarding-context';

const CreateFamilyInputSchema = z.object({
  name: z.string().min(2),
});

type CreateFamilyInput = z.infer<typeof CreateFamilyInputSchema>;

export const CreateFamilyForm = () => {
  const { openState } = useFamilyOnboardingContext();

  const form = useForm<CreateFamilyInput>({
    resolver: zodResolver(CreateFamilyInputSchema),
    defaultValues: {
      name: '',
    },
  });

  const { control, handleSubmit, reset } = form;

  const { mutateAsync } = useCreateFamilyMutation();

  const onFinished = () => {
    reset();
    openState?.setOpen(false);
  };

  const onSubmit = async (values: CreateFamilyInput) => {
    await mutateAsync({
      name: values.name,
    });

    onFinished();
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input disabled={false} placeholder="Nome da família" {...field} />
              </FormControl>
              <FormDescription>Digite aqui o nome da família</FormDescription>
            </FormItem>
          )}
        />
        <div className="flex flex-col-reverse items-end gap-4 md:justify-end md:flex-row">
          <Button
            onClick={() => {
              onFinished();
            }}
            variant={'outline'}
            type="button"
            className="w-24"
          >
            Cancelar
          </Button>
          <Button type="submit" className="w-full md:w-24">
            Salvar
          </Button>
        </div>
      </form>
    </Form>
  );
};
