import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLogin from 'pages/authentication/Login';
import AuthRegister from 'pages/authentication/Register';
import DashboardDefault from 'pages/dashboard/index';
import MainLayout from 'layout/MainLayout/index';

// project import

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const router = createBrowserRouter([
    { path: '/', element: <AuthLogin /> },
    { path: '/register', element: <AuthRegister /> },
    {
      path: '/dashboard',
      element: (
        <MainLayout>
          <DashboardDefault />
        </MainLayout>
      )
    }
  ]);
  return <RouterProvider router={router} />;
}
