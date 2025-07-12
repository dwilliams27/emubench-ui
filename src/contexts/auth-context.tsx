// firebase-auth-context.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut as firebaseSignOut, type User } from 'firebase/auth';
import { auth } from '@/constants/firebase';

interface AuthContextProps {
  user: User | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Mock user for development
const MOCK_USER = {
  uid: "usr_123",
  email: "test@email.test",
  displayName: "Test Testington",
  emailVerified: true,
  // Add other User properties as needed
} as User;

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (import.meta.env.DEV) {
      setUser(MOCK_USER);
      setIsLoading(false);
      return;
    }

    const checkAndSetUser = async (user: User | null) => {
      try {
        await user?.getIdToken(true);
        setUser(user);
      } catch (error) {
        console.error("Initial token validation failed:", error);
        await auth.signOut();
      }
    }

    const checkCurrentUser = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        checkAndSetUser(currentUser);
      }
      setIsLoading(false);
    };
    checkCurrentUser();

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        checkAndSetUser(user);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const signOut = async () => {
    try {
      if (!import.meta.env.DEV) {
        await firebaseSignOut(auth);
      }
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const value = {
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
