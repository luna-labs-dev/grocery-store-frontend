import { Login } from '@/view/pages';
import { createFileRoute } from '@tanstack/react-router';

const Index = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: Index,
});
