import React from 'react';
import { App } from '@/app';
import ReactDOM from 'react-dom/client';

import './view/config/style/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
