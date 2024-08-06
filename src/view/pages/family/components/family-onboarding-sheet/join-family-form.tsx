import { useJoinFamilyMutation } from '@/infrastructure';
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

const JoinFamilyInputSchema = z.object({
  inviteCode: z.string().min(2),
});

type JoinFamilyInput = z.infer<typeof JoinFamilyInputSchema>;

export const JoinFamilyForm = () => {
  const { openState } = useFamilyOnboardingContext();

  const form = useForm<JoinFamilyInput>({
    resolver: zodResolver(JoinFamilyInputSchema),
    defaultValues: {
      inviteCode: '',
    },
  });

  const { control, handleSubmit, reset } = form;

  const { mutateAsync } = useJoinFamilyMutation();

  const onFinished = () => {
    reset();
    openState?.setOpen(false);
  };

  const onSubmit = async (values: JoinFamilyInput) => {
    await mutateAsync({
      inviteCode: values.inviteCode,
    });

    onFinished();
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          control={control}
          name="inviteCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Codigo do convite</FormLabel>
              <FormControl>
                <Input disabled={false} placeholder="Codigo do convite" {...field} />
              </FormControl>
              <FormDescription>Digite aqui o codigo do convite</FormDescription>
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
