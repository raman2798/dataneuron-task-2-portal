import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { flatMap } from 'lodash';
import { routingHelpers } from '@/helper';
import { CustomLoader, GlobalHandler } from '@/components';
import { routes } from './routeConfigurations';
import { RouteProps } from './routes.types';

const PageNotFound = lazy(() => import('@/pages/PageNotFound'));

const { PublicRoute } = routingHelpers;

const generateRoutes = (routes: RouteProps[], parentPath = '') => {
  const routeElements = flatMap(routes, (route: RouteProps) => {
    const path = `${parentPath}${route.path}`;

    if (route.children) {
      const childrenElements = flatMap(route.children, (childRoute: RouteProps) => generateRoutes([childRoute], path)).filter(Boolean) as JSX.Element[];

      return [<Route key={`${route.key}-child-route`} path={path} element={<Suspense fallback={<CustomLoader />}>{route.component && <route.component />}</Suspense>} />, ...childrenElements];
    }

    return <Route key={`${route.key}-route`} path={path} element={<Suspense fallback={<CustomLoader />}>{route.component && <route.component />}</Suspense>} />;
  });

  return routeElements;
};

export const AppRoutes = () => {
  const publicRoutes = generateRoutes(routes);

  return (
    <>
      <GlobalHandler />
      <Routes>
        <Route element={<PublicRoute />}>{publicRoutes}</Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<CustomLoader />}>
              <PageNotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};
