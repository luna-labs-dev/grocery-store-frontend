import { z } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
  wholesaleMinAmount: z.number().min(1),
  price: z.number().min(1),
  wholesalePrice: z.number().min(1),
});

type FormInput = z.infer<typeof FormInputSchema>;

export const ProductForm = () => {
  const [isWhosale, setIsWholesale] = useState<boolean>(false);

  const form = useForm<FormInput>({
    resolver: zodResolver(FormInputSchema),
    defaultValues: {
      name: '',
      amount: 0,
      wholesaleMinAmount: 0,
      price: 0,
      wholesalePrice: 0,
    },
  });

  const { control } = form;

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4">
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome do Produto" {...field} />
              </FormControl>
              <FormDescription>Digite aqui o nome do produto</FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantidade</FormLabel>
              <FormControl>
                <Input placeholder="Quantidade" {...field} type="number" />
              </FormControl>
              <FormDescription>Digite aqui a quantidade</FormDescription>
            </FormItem>
          )}
        />
        <MoneyInput form={form} label="Preço" name="price" placeholder="Valor do produto" />
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" checked={isWhosale} onCheckedChange={setIsWholesale} />
          <Label htmlFor="airplane-mode">atacado</Label>
        </div>
        {isWhosale && (
          <div>
            <FormField
              control={control}
              name="wholesaleMinAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantidade</FormLabel>
                  <FormControl>
                    <Input placeholder="Quantidade mín. atacado" {...field} type="number" />
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
        <div className="grid grid-cols-2 gap-2">
          <Button variant={'outline'} type="button" className="w-full">
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
