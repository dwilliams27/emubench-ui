import React, { createContext, useContext, useRef } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

interface SupabaseContextProps {
  client: SupabaseClient;
}

const SupabaseContext = createContext<SupabaseContextProps | undefined>(undefined);

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const clientRef = useRef<SupabaseClient | null>(null);

  if (!clientRef.current) {
    clientRef.current = createClient(
      import.meta.env.VITE_SUPABASE_URL, 
      import.meta.env.VITE_SUPABASE_PUBLIC_KEY
    );
  }

  return (
    <SupabaseContext.Provider value={{ client: clientRef.current }}>
      {children}
    </SupabaseContext.Provider>
  );
}

export function useSupabase() {
  const context = useContext(SupabaseContext);
  
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  
  return context;
}
