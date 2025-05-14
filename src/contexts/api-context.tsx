import { EmuBenchServ } from '@/services/emubench-serv';
import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useAuth } from './auth-context';

interface ApiContextProps {
  api: EmuBenchServ;
}

const ApiContext = createContext<ApiContextProps | undefined>(undefined);

export function ApiProvider({ children }: { children: React.ReactNode }) {
  const { session } = useAuth();
  const apiRef = useRef<EmuBenchServ>(new EmuBenchServ(session));

  useEffect(() => {
    apiRef.current.updateAuthToken(session);
  }, [session]);

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
