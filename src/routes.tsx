import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { RootLayout } from "@/layouts/root-layout";
import { DashboardRouter } from "@/routers/dashboard-router";
import { LoginRouter } from "@/routers/login-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" replace />
      },
      {
        path: "/login/*",
        element: <LoginRouter />,
      },
      {
        path: "/dashboard/*",
        element: <DashboardRouter />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
