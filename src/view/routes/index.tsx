import { createFileRoute } from '@tanstack/react-router';

const Index = () => {
  return (
    <div>
      <h1>Example Homepage</h1>
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: Index,
});
