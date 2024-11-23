import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found. Please check public/index.html');
}
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
