import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { RootLayout } from "@/layouts/root-layout";
import { DashboardRouter } from "@/routers/dashboard-router";
import { LoginRouter } from "@/routers/login-router";
import { ProtectedRoute } from "./components/auth/protected-route";
import { useAuth } from "./contexts/auth-context";

function HomeRedirect() {
  const { session } = useAuth();
  return <Navigate to={session ? "/dashboard" : "/login"} replace />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomeRedirect />
      },
      {
        path: "/login/*",
        element: <LoginRouter />,
      },
      {
        path: "/dashboard/*",
        element: (
          <ProtectedRoute>
            <DashboardRouter />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
