import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/view/components/shadcn';
import { useBreadCrumbs } from '@/view/hooks/use-breadcrumbs';
import React from 'react';
import { Link } from 'react-router-dom';

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
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <React.Fragment key={`${breadcrumb.label}:${breadcrumb.to}`}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={breadcrumb.to}>{breadcrumb.label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index + 1 < breadcrumbs.length && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
