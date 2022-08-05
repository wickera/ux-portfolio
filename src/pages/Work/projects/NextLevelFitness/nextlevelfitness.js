import './nextlevelfitness.scss';
import project from './next_level_fitness.json';
import LandingPhoto from './images/Group 580.png';
import Tabs from '../../../../components/tabs/tabs';
import Footer from '../../../../components/footer/footer';

export default function NextLevelFitness() {
 return (
  <>
   <div className='nlf' id='nlf' name='nlf'>
    <img
     src={LandingPhoto}
     alt='Next Level Fitness'
     className='nlf__landing-photo'
    />
    <div className='nlf__page'>
     <div className='nlf__desc'>
      <p className='nlf__desc--info'>
       <span className='nlf__desc--info--title'>Role</span>
       <span className='nlf__desc--info--text'>
        Discovery: User Interviews, Definition: Prototyping, user testing and
        Design: Branding, wireframes, copy writing
       </span>
      </p>
      <p className='nlf__desc--info'>
       <span className='nlf__desc--info--title'>Timeline</span>
       <span className='nlf__desc--info--text'>March 2022 - May 2022</span>
      </p>
      <p className='nlf__desc--info'>
       <span className='nlf__desc--info--title'>Tools Used</span>
       <span className='nlf__desc--info--text'>Figma &amp; Miro</span>
      </p>
      <p className='nlf__desc--info'>
       <span className='nlf__desc--info--title'>Project Type</span>
       <span className='nlf__desc--info--text'>Solo Project</span>
      </p>
     </div>
    </div>
    <Tabs project={project} />
   </div>
   <Footer />
  </>
 );
}
