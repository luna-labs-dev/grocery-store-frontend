import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_public-routes')({
  beforeLoad: ({ context }) => {
    const { userLoggedIn } = context.firebaseContext;
    console.log(context.firebaseContext.idTokenResult);

    // if (userLoggedIn) {
    //   throw redirect({
    //     to: '/',
    //   });
    // }
  },
});
