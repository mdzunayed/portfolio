import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hero from './components/hero';
import reportWebVitals from './reportWebVitals';

// Create the root for the React app
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the main app component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  <React.StrictMode>
  <Hero />
</React.StrictMode>
);

// Performance measuring (optional)
reportWebVitals();
