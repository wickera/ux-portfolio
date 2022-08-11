import { Link } from 'react-router-dom';
import './work.scss';

// Header Photos
import CityPupsLanding from './projects/CityPups/images/CPLanding.png';
import MindEvolutionHeader from './projects/MindEvolution/images/MEHeader.png';
import NextLevelFitnessHeader from './projects/NextLevelFitness/images/Group 580.png';
import RiffsFinancialCoachHeader from './projects/RiffsFinancialCoach/images/workheader.png';

export default function Work() {
 return (
  <div className='work' id='work' name='work'>
   <div className='work__project'>
    <Link to='/work/mind_evolution' replace>
     <img
      src={MindEvolutionHeader}
      className='work__project--img'
      alt='Project'
     />
    </Link>
    <div className='work__project--desc'>
     <h3>
      Mind Evolution <span>| UI/UX Mobile App</span>
     </h3>
     <p>Empowering you to take control of your mental health.</p>
    </div>
   </div>
   <div className='work__project'>
    <Link to='/work/city_pups' replace>
     <img src={CityPupsLanding} className='work__project--img' alt='Project' />
    </Link>
    <div className='work__project--desc'>
     <h3>
      CityPups <span>| Modified GV Design Sprint</span>
     </h3>
     <p>Helping people living in large cities find the perfect dog to adopt.</p>
    </div>
   </div>
   <div className='work__project'>
    <Link to='/work/next_level_fitness' replace>
     <img
      src={NextLevelFitnessHeader}
      className='work__project--img'
      alt='Project'
     />
    </Link>
    <div className='work__project--desc'>
     <h3>
      Next Level Fitness <span>| UI/UX Fitness Tracking Mobile App</span>
     </h3>
     <p>
      Take your fitness to the next level with a virtual assistant who will keep
      you accountable so you can reach your goal.
     </p>
    </div>
   </div>
   <div className='work__project'>
    <Link to='/work/riffs_financial_coach' replace>
     <img
      src={RiffsFinancialCoachHeader}
      className='work__project--img'
      alt='Project'
     />
    </Link>
    <div className='work__project--desc'>
     <h3>
      Riff's Financial Coach <span>| UX Design Website Dashboard</span>
     </h3>
     <p>
      As an artist, you can learn how to take your music full-time by better
      managing your finances.
     </p>
    </div>
   </div>
  </div>
 );
}
