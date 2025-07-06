import { EmuBenchServ, type Api } from '@/services/emubench-serv';
import React, { createContext, useContext, useRef } from 'react';
import { EmuBenchServMock } from '@/services/emubench-serv-mock';

interface ApiContextProps {
  api: Api;
}

const ApiContext = createContext<ApiContextProps | undefined>(undefined);

export function ApiProvider({ children }: { children: React.ReactNode }) {
  const apiRef = useRef<Api>(
    import.meta.env.VITE_MOCK_API ? new EmuBenchServMock() : new EmuBenchServ()
  );

  return (
    <ApiContext.Provider value={{ api: apiRef.current }}>
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
