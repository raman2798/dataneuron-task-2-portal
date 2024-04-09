import { FC } from 'react';

export type RouteProps = {
  key: string;
  path: string;
  component?: FC;
  children?: RouteProps[];
};
