import { Login } from '@/view/pages';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_public-routes/login')({
  component: Login,
});
