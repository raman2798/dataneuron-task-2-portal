import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { MainLayout } from '@/layouts';

export const PublicRoute: FC = (): ReactElement => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
