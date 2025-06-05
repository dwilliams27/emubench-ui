import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSupabase } from './supabase-context';
import type { Session, User } from '@supabase/supabase-js';

interface AuthContextProps {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const MOCK_SESSION_RESPONSE = {
  data: {
    session: {
      provider_token: "mock_provider_token",
      provider_refresh_token: "mock_provider_refresh_token",
      access_token: "mock_access_token",
      refresh_token: "Mock_refresh_token",
      expires_in: 999,
      expires_at: 999,
      token_type: "idk",
      user: {
        id: "usr_123",
        app_metadata: {},
        user_metadata: {
          full_name: "Test Testington",
          email: "test@email.test"
        }
      }
    }
  }
} as unknown as { data: { session: Session } };

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { client } = useSupabase();
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initSession = async () => {
      const { data } = await (import.meta.env.DEV ? MOCK_SESSION_RESPONSE : client.auth.getSession());
      setSession(data.session);
      setUser(data.session?.user || null);
      setIsLoading(false);
    };

    initSession();

    const { data: { subscription } } = client.auth.onAuthStateChange((_, newSession) => {
      setSession(newSession);
      setUser(newSession?.user || null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [client.auth]);

  const signOut = async () => {
    try {
      await client.auth.signOut();
      setSession(null);
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const value = {
    session,
    user,
    isLoading,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}
