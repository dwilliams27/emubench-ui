import { Cog, FlaskConical, MonitorPlay, Scroll, ServerCog } from "lucide-react";

export interface TabItem {
  label: string;
  title: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const TEST_TAB_ID = {
  TEST_ACTIVE: 'test-active',
  TEST_CONFIG: 'test-config',
  TEST_HISTORY: 'test-history',
  API_PLAYGROUND: 'api-playground',
} as const;
export type TestTabId = typeof TEST_TAB_ID[keyof typeof TEST_TAB_ID];

export const TEST_TABS: Record<string, TabItem> = {
  [TEST_TAB_ID.TEST_ACTIVE]: {
    label: 'Active',
    title: 'Active Tests',
    url: '/test-active',
    icon: MonitorPlay,
  },
  [TEST_TAB_ID.TEST_CONFIG]: {
    label: 'Config',
    title: 'Test Config',
    url: '/test-config',
    icon: Cog,
  },
  [TEST_TAB_ID.TEST_HISTORY]: {
    label: 'History',
    title: 'Test History',
    url: '/test-history',
    icon: Scroll,
  }
};

export const DEV_TAB_ID = {
  API_PLAYGROUND: 'api-playground',
} as const;
export type DevTabId = typeof DEV_TAB_ID[keyof typeof DEV_TAB_ID];

export const DEV_TABS: Record<string, TabItem> = {
  [TEST_TAB_ID.API_PLAYGROUND]: {
    label: 'API Playground',
    title: 'API Playground',
    url: '/api-playground',
    icon: FlaskConical,
  },
};
