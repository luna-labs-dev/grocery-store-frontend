import React from 'react';
import { Providers } from '@/view';
import ReactDOM from 'react-dom/client';

import './view/config/style/globals.css';

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Providers />
    </React.StrictMode>,
  );
}
