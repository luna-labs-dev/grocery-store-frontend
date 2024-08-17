import { useBreadCrumbs } from '@/hooks';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FamilyOnboardingPage } from '../pages';

export const FamilyRoute = () => {
  const { familyAction } = useParams();
  const isFamilyOnboarding = familyAction === 'onboarding';

  const { addBreadcrumbs } = useBreadCrumbs();

  useEffect(() => {
    addBreadcrumbs(
      [
        {
          label: 'Família',
          to: '/family',
        },
      ],
      {
        title: 'Familia',
        subTitle: 'Crie ou entre em uma família',
      },
    );
  }, [addBreadcrumbs]);

  if (isFamilyOnboarding) {
    return <FamilyOnboardingPage />;
  }

  return <div>Family Route</div>;
};
