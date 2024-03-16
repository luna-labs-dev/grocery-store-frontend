import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfiguredRouterProvider } from '@/view';

import './view/config/style/globals.css';

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <ConfiguredRouterProvider />
    </React.StrictMode>,
  );
}
