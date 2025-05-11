import { TEST_TAB_ID, TEST_TABS, type TabItem, DEV_TABS } from '@/constants/tabs';
import React, { createContext, useContext, useState } from 'react';

interface UIStateContextProps {
  activeTab: TabItem;
  setActiveTab: (tabId: string | null) => void;
}

const UIStateContext = createContext<UIStateContextProps | undefined>(undefined);

export function UIStateProvider({ children }: { children: React.ReactNode }) {
  const [_activeTab, _setActiveTab] = useState(TEST_TABS[TEST_TAB_ID.TEST_ACTIVE]);

  const handleSetActiveTab = (tabId: string | null) => {
    if (!tabId) {
      return;
    }
    if (tabId in TEST_TABS) {
      _setActiveTab(TEST_TABS[tabId]);
    } else if (tabId in DEV_TABS) {
      _setActiveTab(DEV_TABS[tabId]);
    }
  };

  const value = {
    activeTab: _activeTab,
    setActiveTab: handleSetActiveTab,
  };

  return (
    <UIStateContext.Provider value={value}>
      {children}
    </UIStateContext.Provider>
  );
}

export function useUIState() {
  const context = useContext(UIStateContext);
  
  if (context === undefined) {
    throw new Error('useUIState must be used within a UIStateProvider');
  }
  
  return context;
}