import { z } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAddProductCartMutation } from '@/infrastructure';
import {
  Form,
  Input,
  Label,
  Button,
  Switch,
  FormItem,
  FormField,
  FormLabel,
  MoneyInput,
  FormControl,
  FormDescription,
} from '@/view/components';

const FormInputSchema = z.object({
  name: z.string().min(2),
  amount: z.number().min(1),
  wholesaleMinAmount: z.number().min(1).optional(),
  price: z.number().min(1),
  wholesalePrice: z.number().min(1).optional(),
});

type FormInput = z.infer<typeof FormInputSchema>;

interface ProductFormProps {
  setOpen: (value: boolean) => void;
  shoppingEventId: string;
}

export const ProductForm = ({ setOpen, shoppingEventId }: ProductFormProps) => {
  const [isWholesale, setIsWholesale] = useState<boolean>(false);

  const form = useForm<FormInput>({
    resolver: zodResolver(FormInputSchema),
    defaultValues: {
      name: '',
      amount: 0,
      wholesaleMinAmount: 1,
      price: 0,
      wholesalePrice: 1,
    },
  });

  const { control, handleSubmit, reset } = form;

  const { mutateAsync } = useAddProductCartMutation();

  const onFinished = () => {
    setOpen(false);
  };

  const onSubmit = async (values: FormInput) => {
    console.log(values);
    const successfully = await mutateAsync({
      shoppingEventId,
      params: {
        name: values.name,
        amount: values.amount,
        price: values.price,
        wholesaleMinAmount: isWholesale ? values.wholesaleMinAmount : undefined,
        wholesalePrice: isWholesale ? values.wholesalePrice : undefined,
      },
    });

    if (successfully) {
      onFinished();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          control={control}
          name="name"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome do Produto" {...field} />
              </FormControl>
              {error && <FormDescription>{error.message}</FormDescription>}
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="amount"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel>Quantidade</FormLabel>
              <FormControl>
                <Input
                  placeholder="Quantidade"
                  {...field}
                  type="number"
                  onChange={(event) => {
                    console.log(typeof event.target.value);
                    field.onChange(Number(event.target.value));
                  }}
                />
              </FormControl>
              {error && <FormDescription>{error.message}</FormDescription>}
            </FormItem>
          )}
        />
        <MoneyInput form={form} label="Preço" name="price" placeholder="Valor do produto" />
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" checked={isWholesale} onCheckedChange={setIsWholesale} />
          <Label htmlFor="airplane-mode">atacado</Label>
        </div>
        {isWholesale && (
          <div className="flex flex-col gap-4">
            <FormField
              control={control}
              name="wholesaleMinAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantidade atacado</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Quantidade mín. atacado"
                      {...field}
                      type="number"
                      onChange={(event) => {
                        console.log(typeof event.target.value);
                        field.onChange(Number(event.target.value));
                      }}
                    />
                  </FormControl>
                  <FormDescription>Digite aqui a quantidade</FormDescription>
                </FormItem>
              )}
            />
            <MoneyInput
              form={form}
              label="Preço atacado"
              name="wholesalePrice"
              placeholder="Valor do produto"
            />
          </div>
        )}
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant={'outline'}
            type="button"
            className="w-full"
            onClick={() => {
              reset();
              onFinished();
            }}
          >
            Cancelar
          </Button>

          <Button type="submit" className="w-full md:w-24">
            Adicionar
          </Button>
        </div>
      </form>
    </Form>
  );
};
