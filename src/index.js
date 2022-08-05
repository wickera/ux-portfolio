import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import routes from './pages/routes';
import Navbar from './components/navbar/navbar';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <BrowserRouter>
  <Navbar />
  {routes}
 </BrowserRouter>
);
