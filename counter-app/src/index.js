import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Get the root container element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Initial render with React 18 API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);