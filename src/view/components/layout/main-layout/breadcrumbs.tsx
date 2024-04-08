import { Link } from 'react-router-dom';
import { useBreadCrumbs } from '@/view/hooks/use-breadcrumbs';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/view/components/shadcn';

export const Breadcrumbs = () => {
  const { breadcrumbs } = useBreadCrumbs();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to={'/'}>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {breadcrumbs.map((breadcrumb, index) => (
          <div key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={breadcrumb.to}>{breadcrumb.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index + 1 < breadcrumbs.length && <BreadcrumbSeparator />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
