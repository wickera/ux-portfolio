import Card from '../../components/case-study-card/card';
import MindEvolution from '../../assets/files/mind_evolution.json';
import RiffsFinancialCoach from '../../assets/files/riffs_financial_coach.json';
import miafair from '../../assets/images/miafair.jpg';
import './home.scss';

export default function Home() {
 return (
  <div>
   <div className='home'>
    {/* Landing section on homepage */}
    <div className='home__desc'>
     <h3 className='home__desc--title'>Hello there, I'm Mia.</h3>
     <p className='home__desc--text'>
      I am a UI/UX Designer &amp; Researcher who uses creative thinking and
      strategic planning to solve problems that simplify the lives of others.
     </p>
     <div className='home__location'>
      <i className='fa fa-location-dot home__location--icon'></i>
      <span>Los Angeles County</span>
     </div>
     <button className='home__button'>View Resume</button>
    </div>
    <div className='home__image'>
     <img src={miafair} alt='Mia at the fair' className='home__image--img' />
    </div>
   </div>

   {/* Case Study Cards */}
   <div className='home__work'>
    <h4 className='home__work--title'>Some of the work I'm most proud of.</h4>
    <Card project={MindEvolution} />
    <Card project={RiffsFinancialCoach} />
   </div>

   {/* Skills section */}
   {/* <div className='home__skills'>
    <h4 className='home__skills--title'>Here are also some of my skills:</h4>
    <table className='home__skills--list'>
     <tbody>
      <tr>
       <td>User Research</td>
       <td>User Interviews</td>
       <td>Usability Testing</td>
      </tr>
      <tr>
       <td>Surveying</td>
       <td>Experience Design</td>
       <td>Information Arcitecture</td>
      </tr>
      <tr>
       <td>Wireframes &amp; Mockups</td>
       <td>Prototyping</td>
       <td>Visual Design</td>
      </tr>
     </tbody>
    </table>
   </div> */}

   {/* About Section */}
   <div className='home__about'>
    <div className='home__about--info'>
     <h4 className='home__about--title'>Nice to meet you.</h4>
     <p className='home__about--desc'>
      I am an innovator! My motto is, "there's got to be a better way! It is
      more than my motto; it is pre-programmed ROM chip in my brain's reticular
      receiver. I enjoy the challenge of a problem to the degree that I become
      sad when I must settle on any one solution... I know; I know, I'm actively
      working on it!"
     </p>
     <button className='home__button'>More About Me</button>
    </div>
    <div className='home__about--image'>
     <img src={miafair} alt='mia fair' className='home__about--img' />
    </div>
   </div>
  </div>
 );
}
