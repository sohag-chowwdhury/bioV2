import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WheelProvider } from "./Context/Wheel";


import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <WheelProvider>
        <App />
    </WheelProvider>

  </React.StrictMode>
);


