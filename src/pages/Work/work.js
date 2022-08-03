import './work.scss';
import miafair from '../../assets/images/miafair.jpg';

export default function Work() {
 return (
  <div className='work'>
   <div className='work__project'>
    <img src={miafair} className='work__project--img' alt='Project' />
    <div className='work__project--desc'>
     <h3>
      Mind Evolution <span>| UI/UX Mobile App</span>
     </h3>
     <p>Empowering you to take control of your mental health.</p>
    </div>
   </div>
   <div className='work__project'>
    <img src={miafair} className='work__project--img' alt='Project' />
    <div className='work__project--desc'>
     <h3>
      CityPups <span>| Modified GV Design Sprint</span>
     </h3>
     <p>Helping people living in large cities find the perfect dog to adopt.</p>
    </div>
   </div>
   <div className='work__project'>
    <img src={miafair} className='work__project--img' alt='Project' />
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
    <img src={miafair} className='work__project--img' alt='Project' />
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
