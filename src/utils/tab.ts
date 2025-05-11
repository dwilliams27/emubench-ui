import { DEV_TABS, TEST_TABS } from "@/constants/tabs";

export function getTestTabIdForPath(path: string): string | null {
  let tabId = Object.keys(TEST_TABS).find((id) => TEST_TABS[id].url === `/${path}`);
  if (tabId) {
    return tabId;
  }
  tabId = Object.keys(DEV_TABS).find((id) => DEV_TABS[id].url === `/${path}`);
  if (tabId) {
    return tabId;
  }
  return null;
}