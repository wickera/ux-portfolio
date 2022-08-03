import Home from './pages/Home/home';
import routes from './pages/routes';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

export default function App() {
 return (
  <>
   <Navbar />
   {routes}
   <Footer />
  </>
 );
}
