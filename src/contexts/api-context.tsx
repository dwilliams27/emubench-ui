import { EmuBenchServ, type Api } from '@/services/emubench-serv';
import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useAuth } from './auth-context';
import { EmuBenchServMock } from '@/services/emubench-serv-mock';

interface ApiContextProps {
  api: Api;
}

const ApiContext = createContext<ApiContextProps | undefined>(undefined);

export function ApiProvider({ children }: { children: React.ReactNode }) {
  const { session } = useAuth();
  const apiRef = useRef<Api>(
    import.meta.env.VITE_MOCK_API ? new EmuBenchServMock(session) : new EmuBenchServ(session)
  );

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
