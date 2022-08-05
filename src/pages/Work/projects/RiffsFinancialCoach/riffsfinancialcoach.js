import './riffsfinancialcoach.scss';
import project from './riffs_financial_coach.json';
import LandingPhoto from './images/Riff work page header.png';
import Tabs from '../../../../components/tabs/tabs';
import Footer from '../../../../components/footer/footer';

export default function RiffsFinancialCoach() {
 return (
  <>
   <div className='rfc' id='rfc' name='rfc'>
    <img
     src={LandingPhoto}
     alt='Riffs Financial Coach'
     className='rfc__landing-photo'
    />
    <div className='rfc__page'>
     <div className='rfc__desc'>
      <p className='rfc__desc--info'>
       <span className='rfc__desc--info--title'>Role</span>
       <span className='rfc__desc--info--text'>
        UI/UX Design: Wireframes/Wireflows/Iterations, UX Research: User
        Flows/Information Architecture, Validation: Usability Testing
       </span>
      </p>
      <p className='rfc__desc--info'>
       <span className='rfc__desc--info--title'>Timeline</span>
       <span className='rfc__desc--info--text'>4 weeks</span>
      </p>
      <p className='rfc__desc--info'>
       <span className='rfc__desc--info--title'>Tools Used</span>
       <span className='rfc__desc--info--text'>Figma &amp; Figma Jam</span>
      </p>
      <p className='rfc__desc--info'>
       <span className='rfc__desc--info--title'>Project Type</span>
       <span className='rfc__desc--info--text'>Contract</span>
      </p>
     </div>
     <Tabs project={project} />
    </div>
   </div>
   <Footer />
  </>
 );
}
