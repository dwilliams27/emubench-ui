import { Navigate, Route, Routes } from "react-router-dom";

import ApiPlayground from "@/pages/api-playground";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import TestConfig from "@/pages/test-config";
import TestActive from "@/pages/test-active";
import TestHistory from "@/pages/test-history";

export function DashboardRouter() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/" element={<Navigate to="/dashboard/test-active" replace />}></Route>
        <Route path="/test-active" element={<TestActive />} />
        <Route path="/test-config" element={<TestConfig />} />
        <Route path="/test-history" element={<TestHistory />} />

        <Route path="/api-playground" element={<ApiPlayground />} />
      </Route>
    </Routes>
  );
}
