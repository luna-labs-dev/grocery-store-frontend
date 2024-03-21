import { createFileRoute } from '@tanstack/react-router';

const Index = () => {
  return (
    <div>
      <h1>Authenticated Place</h1>
    </div>
  );
};

export const Route = createFileRoute('/_protected-routes/')({
  component: Index,
});
