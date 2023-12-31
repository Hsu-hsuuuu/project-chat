import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Chat from './Chat';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>
);

