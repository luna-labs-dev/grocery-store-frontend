import {
  useGetMarketByIdQuery,
  useNewMarketMutation,
  useUpdateMarketMutation,
} from '@/infrastructure';
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
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const FormInputSchema = z.object({
  marketName: z.string(),
});

type FormInput = z.infer<typeof FormInputSchema>;

interface MarketFormProps {
  updateProps?: {
    setOpen?: (open: boolean) => void;
    marketId?: string;
  };
}

export const MarketForm = ({ updateProps }: MarketFormProps) => {
  const navigate = useNavigate();

  const { data: market } = useGetMarketByIdQuery({ marketId: updateProps?.marketId });

  const form = useForm<FormInput>({
    resolver: zodResolver(FormInputSchema),
    defaultValues: {
      marketName: '',
    },
  });

  const { control, handleSubmit, reset, setValue } = form;

  useEffect(() => {
    if (market) {
      setValue('marketName', market.name);
    }
  }, [market, setValue]);

  const { mutateAsync: newMutateAsync, isPending: newIsPending } = useNewMarketMutation();
  const { mutateAsync: updateMutateAsync, isPending: updateIsPending } = useUpdateMarketMutation();

  const onFinished = () => {
    if (updateProps?.setOpen) {
      updateProps.setOpen(false);
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
            Salvar
          </Button>
        </div>
      </form>
    </Form>
  );
};
