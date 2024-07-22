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

const CreateFamilyInputSchema = z.object({
  name: z.string().min(2),
});

type CreateFamilyInput = z.infer<typeof CreateFamilyInputSchema>;

export const CreateFamilyForm = () => {
  const form = useForm<CreateFamilyInput>({
    resolver: zodResolver(CreateFamilyInputSchema),
    defaultValues: {
      name: '',
    },
  });

  const { control, handleSubmit } = form;

  const onSubmit = async (values: CreateFamilyInput) => {
    console.log(values);
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
              // reset();
              // onFinished();
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
