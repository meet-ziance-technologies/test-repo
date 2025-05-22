import { RouteObject, useRoutes } from 'react-router-dom';
import { ListingPage } from '../pages/listing.page';
import { CommonLayout } from '../components/layout/common.layout';
import { OwnedPropertyPage } from '../pages/ownedPropery.page';
import { HomePage } from '../pages/home.page';

const routes: RouteObject[] = [
  {
    path: '',
    element: <CommonLayout />,
    children: [
      {
        path: '',
        index: true,
        element: <HomePage />,
      },
      {
        path: 'listing',
        index: true,
        element: <ListingPage />,
      },
      {
        path: 'owned-property',
        index: true,
        element: <OwnedPropertyPage />,
      },
    ],
  },
];

export const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};
