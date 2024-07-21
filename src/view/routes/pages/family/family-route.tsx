import { useBreadCrumbs } from '@/view/hooks';
import { FamilyPage } from '@/view/pages';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const FamilyRoute = () => {
  const { familyAction } = useParams();

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
        title: 'Onboarding',
        subTitle: 'Crie ou entre em uma família',
      },
    );
  }, [addBreadcrumbs]);

  if (familyAction === 'onboarding') {
    return <FamilyPage />;
  }

  return <div>Family Route</div>;
};
