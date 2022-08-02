import miafair from '../../assets/images/miafair.jpg';
import Card from '../../components/case-study-card/card';
import './Home.css';

export default function Home() {
 return (
  <div>
   <div className='landing'>
    {/* Landing section on homepage */}
    <div className='landing__left'>
     <h3 className='landing__title'>Hello there, I'm Mia.</h3>
     <p className='landing__text'>
      I am a UI/UX Designer &amp; Researcher who uses creative thinking and
      strategic planning to solve problems that simplify the lives of others.
     </p>
     <p className='landing__text'>Location Icon - Los Angeles County</p>
     <button>View Resume</button>
    </div>
    <div className='landing__right'>
     <img src={miafair} alt='Mia at the fair' className='img' />
    </div>
   </div>
   <div className='home__work'>
    <h4 className='home__work--title'>Some of the work I'm most proud of.</h4>
    <Card />
   </div>
  </div>
 );
}
