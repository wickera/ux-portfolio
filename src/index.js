import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes from './pages/routes';
import Navbar from './components/navbar/navbar';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
const history = createBrowserHistory();

root.render(
 <BrowserRouter history={history}>
  <Navbar />
  {routes}
 </BrowserRouter>
);
