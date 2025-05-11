import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import ApiPlayground from "@/pages/api-playground";
import Layout from "@/layouts/main-layout";
import TestConfig from "@/pages/test-config";
import TestActive from "@/pages/test-active";
import { TEST_TAB_ID, TEST_TABS } from "@/constants/tabs";
import TestHistory from "@/pages/test-history";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/test-active" replace />,
      },
      {
        path: TEST_TABS[TEST_TAB_ID.TEST_ACTIVE].url,
        element: <TestActive />,
      },
      {
        path: TEST_TABS[TEST_TAB_ID.TEST_CONFIG].url,
        element: <TestConfig />,
      },
      {
        path: TEST_TABS[TEST_TAB_ID.TEST_HISTORY].url,
        element: <TestHistory />,
      },
      {
        path: "api-playground",
        element: <ApiPlayground />,
      }
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
