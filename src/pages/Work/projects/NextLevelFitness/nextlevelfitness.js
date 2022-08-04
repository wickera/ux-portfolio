import project from './next_level_fitness.json';
import LandingPhoto from './images/Group 580.png';
import './nextlevelfitness.scss';

export default function NextLevelFitness() {
 return (
  <div className='nlf' id='nlf'>
   <img
    src={LandingPhoto}
    alt='Next Level Fitness'
    className='nlf__landing-photo'
   />
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
   <h4 className='nlf__name'>{project.ProjectName}</h4>
   <p>
    Take your fitness to the next level with a virtual assistant who will keep
    you accountable so you can reach your goal.
   </p>
  </div>
 );
}
