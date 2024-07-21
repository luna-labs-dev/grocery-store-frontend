import { useBreadCrumbs } from '@/view/hooks';
import { useEffect } from 'react';

export const FamilyOnboardingRoute = () => {
  const { addBreadcrumbs } = useBreadCrumbs();

  useEffect(() => {
    addBreadcrumbs(
      [
        {
          label: 'Família',
          to: '/family',
        },
        {
          label: 'Onboarding',
          to: '/family/onboarding',
        },
      ],
      {
        title: 'Onboarding',
        subTitle: 'Crie ou entre em uma família',
      },
    );
  }, [addBreadcrumbs]);

  return <div>Family Onboarding</div>;
};
