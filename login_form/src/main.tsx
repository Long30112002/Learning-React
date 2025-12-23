import App from './App.tsx'
import ReactDOM from 'react-dom/client';
import React from 'react';
import { AuthProvider } from './domains/auth/context/AuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
