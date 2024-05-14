import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, Input, FormItem, FormField, FormLabel, FormControl } from '@/view/components';

const FormInputSchema = z.object({
  marketName: z.string(),
});

type FormInput = z.infer<typeof FormInputSchema>;

export const NewMarketForm = () => {
  const form = useForm<FormInput>({
    resolver: zodResolver(FormInputSchema),
  });
  const { control, handleSubmit } = form;

  const onSubmit = (values: FormInput) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="marketName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome do mercado" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
