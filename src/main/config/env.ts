import { z } from 'zod';

const envVariables = z.object({
  VITE_CLIENT_ID: z.string().readonly(),
  VITE_SECRET_KEY: z.string().readonly(),
});

const parsedVariables = envVariables.safeParse(import.meta.env);

if (!parsedVariables.success) {
  throw new Error(parsedVariables.error.message);
}

const { VITE_CLIENT_ID, VITE_SECRET_KEY } = parsedVariables.data;

export const env = {
  baseConfig: {},
  googleAuth: {
    clientId: VITE_CLIENT_ID,
    secretKey: VITE_SECRET_KEY,
  },
};
