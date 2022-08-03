import './about.scss';
import miafair from '../../assets/images/miafair.jpg';

export default function About() {
 return (
  <div className='about'>
   <div className='about__image'>
    <img src={miafair} alt='About' className='about__image--img' />
   </div>

   <div>
    <h2>I'm Mia, Nice to meet you.</h2>
    <p>
     Strategic thinking is my forte, and I enjoy observing and analyzing
     individuals' and organizations' needs and desires. All people have worth,
     and organizations exist to support or impove their worth.
    </p>
    <p>
     I take great pride in my desire to help others. One of my primary
     contributions to organizations in the past is the development of effective
     responses to situations.
    </p>
    <p>
     The utilization of multiple resources, the collaboration of talented,
     innovative teams, and the ability to take advantage of every opportunity
     posture me to create, create, create! I can't wait to demonstrate my
     knowledge in the UI/UX Design World!
    </p>
   </div>
  </div>
 );
}
