import { useBreadCrumbs } from '@/view/hooks';
import { ReactNode } from 'react';

import { Breadcrumbs } from './breadcrumbs';
import { Navigation } from './navigation';

interface MainLayoutProps {
  children: ReactNode;
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  const { currentPage } = useBreadCrumbs();

  return (
    <div className="flex flex-col gap-4 pt-4">
      <div className="flex items-center gap-4 px-4 pt-2">
        <Navigation />
        <div className="flex flex-col items-baseline md:gap-2 md:flex-row">
          <h1 className="text-2xl font-bold">{currentPage.title}</h1>
          {currentPage.subTitle && <span className="hidden md:block">|</span>}
          <h2 className="font-light text-md">{currentPage.subTitle}</h2>
        </div>
      </div>
      <div className="px-4 pt-4">
        <Breadcrumbs />
        {children}
      </div>
    </div>
  );
};
