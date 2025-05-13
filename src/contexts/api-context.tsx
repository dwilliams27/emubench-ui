import { EmuBenchServ } from '@/services/emubench-serv';
import React, { createContext, useContext, useState } from 'react';

interface ApiContextProps {
  api: EmuBenchServ;
}

const ApiContext = createContext<ApiContextProps | undefined>(undefined);

export function ApiProvider({ children }: { children: React.ReactNode }) {
  const [api, _] = useState(new EmuBenchServ());

  return (
    <ApiContext.Provider value={{ api }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  const context = useContext(ApiContext);
  
  if (context === undefined) {
    throw new Error('useApi must be used within a ApiProvider');
  }
  
  return context;
}
