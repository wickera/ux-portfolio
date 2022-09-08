import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import routes from './pages/routes';
import Navbar from './components/navigation/navbar';
import Footer from './components/footer/footer';
import Top from './components/navigation/top';
import ScrollTop from './components/navigation/scrollTop';

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <ScrollTop>
   <Navbar />
   {routes}
   <Top />
   <Footer />
  </ScrollTop>
 </BrowserRouter>
);
