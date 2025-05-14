import { Cog, FlaskConical, MonitorPlay, Scroll, ServerCog } from "lucide-react";

export interface TabItem {
  label: string;
  title: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const TEST_TABS: Record<string, TabItem> = {
  TEST_ACTIVE: {
    label: 'Active',
    title: 'Active Tests',
    url: '/dashboard/test-active',
    icon: MonitorPlay,
  },
  TEST_CONFIG: {
    label: 'Config',
    title: 'Test Config',
    url: '/dashboard/test-config',
    icon: Cog,
  },
  TEST_HISTORY: {
    label: 'History',
    title: 'Test History',
    url: '/dashboard/test-history',
    icon: Scroll,
  }
};

export const DEV_TABS: Record<string, TabItem> = {
  API_PLAYGROUND: {
    label: 'API Playground',
    title: 'API Playground',
    url: '/dashboard/api-playground',
    icon: FlaskConical,
  },
};
