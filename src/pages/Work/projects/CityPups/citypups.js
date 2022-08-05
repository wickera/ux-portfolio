import project from './city_pups.json';
import LandingPhoto from './images/CPLanding.png';
import './citypups.scss';

export default function CityPups() {
 return (
  <div className='city-pups' id='city-pups' name='city-pups'>
   <img
    src={LandingPhoto}
    alt='City Pups'
    className='city-pups__landing-photo'
   />
   <div className='city-pups__desc'>
    <p className='city-pups__desc--info'>
     <span className='city-pups__desc--info--title'>Contributions</span>
     <span className='city-pups__desc--info--text'>
      UX Research, UX Design, Crazy8's, Wireframes, Prototyping, UI Design,
      &amp; Iterations
     </span>
    </p>
    <p className='city-pups__desc--info'>
     <span className='city-pups__desc--info--title'>Timeline</span>
     <span className='city-pups__desc--info--text'>One Week Design Sprint</span>
    </p>
    <p className='city-pups__desc--info'>
     <span className='city-pups__desc--info--title'>Tools Used</span>
     <span className='city-pups__desc--info--text'>Figma &amp; Miro</span>
    </p>
    <p className='city-pups__desc--info'>
     <span className='city-pups__desc--info--title'>Project Type</span>
     <span className='city-pups__desc--info--text'>
      Solo GV Modified Sprint Project
     </span>
    </p>
   </div>
   <h4 className='city-pups__name'>{project.ProjectName}</h4>
   <h6>
    We want to help people living in cities find the perfect dog to adopt
   </h6>
  </div>
 );
}
