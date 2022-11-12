import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Games from './Games';
// import GuGuDan from './GuGuDan/GuGuDan';
import './tailwind.css';
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Games />
  </React.StrictMode>
);
