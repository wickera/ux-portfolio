import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import routes from './pages/routes';
import Navbar from './components/navigation/navbar';
import Top from './components/navigation/top';

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <Navbar />
  {routes}
  <Top />
 </BrowserRouter>
);
