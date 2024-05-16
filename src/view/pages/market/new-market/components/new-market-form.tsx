import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNewMarketMutation } from '@/infrastructure';
import {
  Form,
  Input,
  Button,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormDescription,
} from '@/view/components';

const FormInputSchema = z.object({
  marketName: z.string(),
});

type FormInput = z.infer<typeof FormInputSchema>;

interface NewMarketFormProps {
  setOpen?: (open: boolean) => void;
}

export const NewMarketForm = ({ setOpen }: NewMarketFormProps) => {
  const navigate = useNavigate();

  const form = useForm<FormInput>({
    resolver: zodResolver(FormInputSchema),
    defaultValues: {
      marketName: '',
    },
  });

  const { control, handleSubmit, reset } = form;

  const { mutateAsync, isPending } = useNewMarketMutation();

  const onFinished = () => {
    if (setOpen) {
      setOpen(false);
    }
    navigate('/market');
  };

  const onSubmit = async (values: FormInput) => {
    await mutateAsync(values);
    onFinished();
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          control={control}
          name="marketName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input disabled={isPending} placeholder="Nome do mercado" {...field} />
              </FormControl>
              <FormDescription>Digite aqui o nome do mercado</FormDescription>
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-4 md:justify-end md:flex-row">
          <Button
            onClick={() => {
              reset();
              onFinished();
            }}
            variant={'outline'}
            type="button"
          >
            Cancelar
          </Button>
          <Button type="submit" className="md:w-24">
            Criar
          </Button>
        </div>
      </form>
    </Form>
  );
};
