import { Routes, Route } from 'react-router-dom';
import Home from './Home/home';
import About from './About/about';
import Contact from './Contact/contact';
import Work from './Work/work';
import CityPups from './Work/projects/CityPups/citypups';
import MindEvolution from './Work/projects/MindEvolution/mindevolution';
import NextLevelFitness from './Work/projects/NextLevelFitness/nextlevelfitness';
import RiffsFinancialCoach from './Work/projects/RiffsFinancialCoach/riffsfinancialcoach';

export default (
 <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/work' element={<Work />} />
  <Route path='/work/city_pups' element={<CityPups />} />
  <Route path='/work/mind_evolution' element={<MindEvolution />} />
  <Route path='/work/next_level_fitness' element={<NextLevelFitness />} />
  <Route path='/work/riffs_financial_coach' element={<RiffsFinancialCoach />} />
 </Routes>
);
