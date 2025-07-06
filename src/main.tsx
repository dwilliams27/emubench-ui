import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { UIStateProvider } from './contexts/ui-state-context';
import { ApiProvider } from '@/contexts/api-context.tsx';
import { AuthProvider } from '@/contexts/auth-context.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { FirebaseProvider } from '@/contexts/firebase-context.tsx';

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <StrictMode>
      <FirebaseProvider>
        <AuthProvider>
          <ApiProvider>
            <UIStateProvider>
              <App />
            </UIStateProvider>
          </ApiProvider>
        </AuthProvider>
      </FirebaseProvider>
    </StrictMode>
  </GoogleOAuthProvider>
)
