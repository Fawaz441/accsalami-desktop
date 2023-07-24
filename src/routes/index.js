import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const router = createBrowserRouter([LoginRoutes, MainRoutes]);
  return <RouterProvider router={router} />;
}
