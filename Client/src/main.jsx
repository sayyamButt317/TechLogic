import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter }from 'react-router-dom';
import "aos/dist/aos.css";      
import App from './App.jsx'
import './index.css'
// import 'remixicon/fonts/remixicon.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  </React.StrictMode>
);


