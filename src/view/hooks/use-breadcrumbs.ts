import { create } from 'zustand';

export type BreadcrumbType = {
  label: string;
  to: string;
};

interface BreadcrumbsStore {
  breadcrumbs: BreadcrumbType[];
  addBreadcrumbs: (breadcrumbs: BreadcrumbType[]) => void;
  clearBreadcrumbs: () => void;
}

export const useBreadCrumbs = create<BreadcrumbsStore>((set) => ({
  breadcrumbs: [],
  addBreadcrumbs: (breadcrumbs: BreadcrumbType[]) => {
    set({
      breadcrumbs: breadcrumbs,
    });
  },
  clearBreadcrumbs: () => {
    set({
      breadcrumbs: [],
    });
  },
}));
