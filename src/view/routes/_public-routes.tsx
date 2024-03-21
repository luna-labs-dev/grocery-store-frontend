import { redirect, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_public-routes')({
  beforeLoad: ({ context }) => {
    const { userLoggedIn } = context.firebaseContext;

    if (userLoggedIn) {
      throw redirect({
        to: '/',
      });
    }
  },
});
