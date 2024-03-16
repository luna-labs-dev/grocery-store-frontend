import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfiguredRouterProvider } from '@/view';

import { env } from './main/config/env';
import './view/config/style/globals.css';

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  const { clientId, secretKey } = env.googleAuth;
  root.render(
    <React.StrictMode>
      <h1>{clientId}</h1>
      <ConfiguredRouterProvider />
    </React.StrictMode>,
  );
}
