import { Routes, Route } from 'react-router-dom';
import Home from './Home/home';
import About from './About/about';
import Contact from './Contact/contact';
import Success from './Contact/success';

// Mind Evolution
import MindEvolution from './Work/projects/MindEvolution/mindevolution';

// Riff's Financial Coach
import RiffsFinancialCoach from './Work/projects/RiffsFinancialCoach/riffsfinancialcoach';

export default (
 <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/contact/Email&Successfully&Sent' element={<Success />} />
  <Route path='/work/mind_evolution' element={<MindEvolution />} />
  <Route path='/work/riffs_financial_coach' element={<RiffsFinancialCoach />} />
 </Routes>
);
