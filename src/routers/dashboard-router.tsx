import { Navigate, Route, Routes } from "react-router-dom";

import ApiPlayground from "@/pages/api-playground";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import TestConfig from "@/pages/test-config";
import ActiveTests from "@/pages/active-tests";
import TestHistory from "@/pages/test-history";
import Traces from "@/pages/traces";
import TestExperiment from "@/pages/test-experiment";

export function DashboardRouter() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/" element={<Navigate to="/dashboard/active-tests" replace />}></Route>
        <Route path="/active-tests" element={<ActiveTests />} />
        <Route path="/test-config" element={<TestConfig />} />
        <Route path="/test-experiment" element={<TestExperiment />} />
        <Route path="/test-history" element={<TestHistory />} />

        <Route path="/api-playground" element={<ApiPlayground />} />
        <Route path="/traces" element={<Traces />} />
      </Route>
    </Routes>
  );
}
