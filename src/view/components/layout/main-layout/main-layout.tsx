import { ReactNode } from 'react';

import { Navigation } from './navigation';

interface MainLayoutProps {
  children: ReactNode;
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};
