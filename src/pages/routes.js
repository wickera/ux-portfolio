import { Routes, Route } from 'react-router-dom';
import Home from './Home/home';
import Work from './Work/work';
// import About from './About/about';

export default (
 <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/work' element={<Work />} />
  {/* <Route path='/about' element={<About />} /> */}
 </Routes>
);
