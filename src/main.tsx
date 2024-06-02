import { Providers } from '@/view';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './view/config/style/globals.css';

const rootElement = document.getElementById('root');

if (!!rootElement && !rootElement?.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Providers />
    </React.StrictMode>,
  );
}
