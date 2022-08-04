import project from './mind_evolution.json';
import LandingPhoto from './images/ME Header.png';
import './mindevolution.scss';

export default function MindEvolution() {
 return (
  <div className='mind-evo'>
   <img
    src={LandingPhoto}
    alt='Mind Evolution'
    className='mind-evo__landing-photo'
   />
   <div className='mind-evo__desc'>
    <p className='mind-evo__desc--info'>
     <span className='mind-evo__desc--info--title'>Role</span>
     <span className='mind-evo__desc--info--text'>
      UI/UX Designer, Researcher, &amp; Product Designer
     </span>
    </p>
    <p className='mind-evo__desc--info'>
     <span className='mind-evo__desc--info--title'>Timeline</span>
     <span className='mind-evo__desc--info--text'>
      April 2021 - November 2021
     </span>
    </p>
    <p className='mind-evo__desc--info'>
     <span className='mind-evo__desc--info--title'>Tools Used</span>
     <span className='mind-evo__desc--info--text'>Figma &amp; Miro</span>
    </p>
    <p className='mind-evo__desc--info'>
     <span className='mind-evo__desc--info--title'>Project Type</span>
     <span className='mind-evo__desc--info--text'>Conceptual</span>
    </p>
   </div>
   <h4 className='mind-evo__name'>{project.ProjectName}</h4>
   <p>Empowering you to take control of your mental health.</p>
  </div>
 );
}
