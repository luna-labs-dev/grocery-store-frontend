import { AddProductToCartSuccessResult, Product } from '@/domain';
import { useAddProductCartMutation, useUpdateProductInCartMutation } from '@/infrastructure';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
  MoneyInput,
  Switch,
} from '@/view/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormInputSchema = z.object({
  name: z.string().min(2),
  amount: z.number().int().min(1),
  wholesaleMinAmount: z.number().int().optional(),
  price: z.number().min(1),
  wholesalePrice: z.number().optional(),
});

type FormInput = z.infer<typeof FormInputSchema>;

interface ProductFormProps {
  setOpen: (value: boolean) => void;
  shoppingEventId: string;
  product?: Product;
}

export const ProductForm = ({ setOpen, shoppingEventId, product }: ProductFormProps) => {
  const [isWholesale, setIsWholesale] = useState<boolean>(false);
  const isUpdate = !!product;
  useEffect(() => {
    setIsWholesale(!!product && !!product.wholesaleMinAmount);
  }, [product]);

  const form = useForm<FormInput>({
    resolver: zodResolver(FormInputSchema),
    defaultValues: isUpdate
      ? {
          name: product.name,
          amount: product.amount,
          wholesaleMinAmount: product.wholesaleMinAmount,
          price: product.price,
          wholesalePrice: product.wholesalePrice,
        }
      : {
          name: '',
          amount: 0,
          wholesaleMinAmount: 0,
          price: 0,
          wholesalePrice: 0,
        },
  });

  const { control, handleSubmit, reset } = form;

  const { mutateAsync: mutateAddProductAsync } = useAddProductCartMutation();
  const { mutateAsync: mutateUpdateProductAsync } = useUpdateProductInCartMutation();

  const onFinished = () => {
    setOpen(false);
  };

  const onSubmit = async (values: FormInput) => {
    let success: AddProductToCartSuccessResult | boolean;
    if (isUpdate) {
      await mutateUpdateProductAsync({
        shoppingEventId,
        productId: product.id,
        params: {
          name: values.name,
          amount: Number(values.amount),
          price: values.price,
          wholesaleMinAmount: isWholesale ? Number(values.wholesaleMinAmount) : undefined,
          wholesalePrice: isWholesale ? values.wholesalePrice : undefined,
        },
      });

      success = true;
    } else {
      success = await mutateAddProductAsync({
        shoppingEventId,
        params: {
          name: values.name,
          amount: Number(values.amount),
          price: values.price,
          wholesaleMinAmount: isWholesale ? values.wholesaleMinAmount : undefined,
          wholesalePrice: isWholesale ? values.wholesalePrice : undefined,
        },
      });
    }

    if (success) {
      onFinished();
    }
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
                <Input placeholder="Nome do Produto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantidade de produtos</FormLabel>
              <FormControl>
                <Input
                  placeholder="Quantidade"
                  {...field}
                  type="number"
                  value={field.value === 0 ? '' : field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value === '0' ? '' : Number(event.target.value));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <MoneyInput
          form={form}
          label="Preço de varejo"
          name="price"
          placeholder="Valor do produto"
        />
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
                  <FormLabel>Quantidade mínima de atacado</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Quantidade mín. atacado"
                      {...field}
                      type="number"
                      value={field.value === 0 ? '' : field.value}
                      onChange={(event) => {
                        field.onChange(
                          event.target.value === '0' ? '' : Number(event.target.value),
                        );
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <MoneyInput
              form={form}
              label="Preço de atacado"
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
            {isUpdate ? 'Atualizar' : 'Adicionar'}
          </Button>
        </div>
      </form>
    </Form>
  );
};
