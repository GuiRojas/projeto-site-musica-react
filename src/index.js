import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MissingPage } from './pages/MissingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/projeto-site-musica-react">
      <App/>
    </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MissingPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

