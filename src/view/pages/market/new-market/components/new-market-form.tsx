import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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

export const NewMarketForm = () => {
  const form = useForm<FormInput>({
    resolver: zodResolver(FormInputSchema),
    defaultValues: {
      marketName: '',
    },
  });
  const { control, handleSubmit } = form;

  const onSubmit = (values: FormInput) => {
    console.log(values);
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
                <Input placeholder="Nome do mercado" {...field} />
              </FormControl>
              <FormDescription>Digite aqui o nome do mercado</FormDescription>
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-4 md:justify-end md:flex-row">
          <Button variant={'outline'}>Cancelar</Button>
          <Button type="submit" className="md:w-24">
            Criar
          </Button>
        </div>
      </form>
    </Form>
  );
};
