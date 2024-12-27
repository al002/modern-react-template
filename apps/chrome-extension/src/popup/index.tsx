import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/globals.css';

function Popup() {
  return (
    <div className="w-[300px] p-4">
      <h1 className="text-lg font-bold">Narauu</h1>
      <p>Language Learning Assistant</p>
    </div>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
