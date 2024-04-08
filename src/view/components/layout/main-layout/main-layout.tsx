import { ReactNode } from 'react';

import { Navigation } from './navigation';

interface MainLayoutProps {
  children: ReactNode;
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Navigation />
      <div className="flex justify-end px-4 pt-2">
        <h1 className="font-bold">Current Page</h1>
      </div>
      <div className="px-4">{children}</div>
    </div>
  );
};
