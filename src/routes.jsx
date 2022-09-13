import { useRoutes } from 'react-router-dom';
import DashboardApp from './pages/DashboardApp';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardApp />,
    },
  ]);
}
