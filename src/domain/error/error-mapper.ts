import { NewMarketParams } from '../entities';

export interface MappedError {
  title: string;
  description?: string;
}

type MakeMappedError = (params: any) => MappedError;

const mappedErrors: Record<string, MakeMappedError> = {
  MARKET_ALREADY_EXISTS_ERROR: (params: NewMarketParams) => ({
    title: 'Erro ao criar Mercado',
    description: `o mercado "${params.marketName}" já existe`,
  }),
  UNKOWN: () => ({
    title: 'Ocorreu um erro inesperado',
    description: 'Contate um administrador',
  }),
};
export const errorMapper = (errorCode: string): MakeMappedError => {
  const mappedError = mappedErrors[errorCode];

  return mappedError ?? mappedErrors.UNKOWN;
};
