import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UIStateProvider } from './contexts/ui-state-context'
import { ApiProvider } from '@/contexts/api-context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiProvider>
      <UIStateProvider>
        <App />
      </UIStateProvider>
    </ApiProvider>
  </StrictMode>,
)
