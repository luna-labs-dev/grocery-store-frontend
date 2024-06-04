'use client';
import { useEffect, useReducer, useRef } from 'react';
import type { UseFormReturn } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '../shadcn';

type TextInputProps = {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  placeholder: string;
};

// Brazilian currency config
const moneyFormatter = Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  currencyDisplay: 'symbol',
  currencySign: 'standard',
  style: 'currency',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const MoneyInput = (props: TextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const initialValue = props.form.getValues()[props.name]
    ? moneyFormatter.format(props.form.getValues()[props.name])
    : '';

  const [value, setValue] = useReducer((_: any, next: string) => {
    const digits = next.replace(/\D/g, '');
    return moneyFormatter.format(Number(digits) / 100);
  }, initialValue);

  function handleChange(realChangeFn: (realValue: number) => void, formattedValue: string) {
    const digits = formattedValue.replace(/\D/g, '');
    const realValue = Number(digits) / 100;
    realChangeFn(realValue);
  }

  useEffect(() => {
    // Coloca o cursor no final do input
    if (inputRef.current) {
      setTimeout(() => {
        const length = value.length;
        inputRef.current?.setSelectionRange(length, length);
      }, 0);
    }
  }, [value]);

  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field }) => {
        field.value = value;
        const _change = field.onChange;

        return (
          <FormItem>
            <FormLabel>{props.label}</FormLabel>
            <FormControl>
              <Input
                placeholder={props.placeholder}
                type="text"
                {...field}
                ref={inputRef}
                onChange={(ev) => {
                  const inputValue = ev.target.value;

                  setValue(inputValue);
                  handleChange(_change, inputValue);
                }}
                value={value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
