import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/globals.css';

function Options() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Narauu Settings</h1>
      {/* Add your settings components here */}
    </div>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>
);
