import { z } from 'zod';
import { Market } from '@/domain';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNewMarketMutation, useUpdateMarketMutation } from '@/infrastructure';
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

interface MarketFormProps {
  setOpen?: (open: boolean) => void;
  market?: Market;
}

export const MarketForm = ({ setOpen, market }: MarketFormProps) => {
  const navigate = useNavigate();

  const form = useForm<FormInput>({
    resolver: zodResolver(FormInputSchema),
    defaultValues: {
      marketName: market?.name ?? '',
    },
  });

  const { control, handleSubmit, reset } = form;

  const { mutateAsync: newMutateAsync, isPending: newIsPending } = useNewMarketMutation();
  const { mutateAsync: updateMutateAsync, isPending: updateIsPending } = useUpdateMarketMutation();

  const onFinished = () => {
    if (setOpen) {
      setOpen(false);
    }
    navigate('/market');
  };

  const onSubmit = async (values: FormInput) => {
    if (market) {
      const { id } = market;
      await updateMutateAsync({
        marketId: id,
        marketName: values.marketName,
      });
    } else {
      await newMutateAsync(values);
    }
    onFinished();
  };

  const isPending = newIsPending || updateIsPending;

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
        <div className="flex flex-col-reverse items-end gap-4 md:justify-end md:flex-row">
          <Button
            onClick={() => {
              reset();
              onFinished();
            }}
            variant={'outline'}
            type="button"
            className="w-24"
          >
            Cancelar
          </Button>
          <Button type="submit" className="w-full md:w-24">
            Criar
          </Button>
        </div>
      </form>
    </Form>
  );
};
