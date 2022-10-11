import '../../sections.scss';
import { Element } from 'react-scroll';

export const MEConclusion = (props) => {
 return (
  <Element id='conclusion' name='conclusion'>
   <hr></hr>
   <div className='me'>
    <h4 className='me__title'>conclusion</h4>
    <div className='me__content'>
     <p className='me__content--title'>Lessons learned</p>
     <p className='me__content--desc'>
      This was a long and intense process, but a fantastic learning experience.
      I learned <b>listening to the user is vitally important</b> to the success
      of the product and to <b>trust the research.</b>
     </p>
     <p className='me__content--title'>outcomes</p>
     <p className='me__content--desc'>
      The reactions from <b>both rounds of testing were positive</b>. Users
      liked the idea of having a mental health app that provides{' '}
      <b>different treatment options they can do independently</b>, along with{' '}
      <b>educating themselves</b>. The next steps for this project are to refine
      prototype, expand the Tracking Feature, Dashboard Customization, Find a
      Therapist Feature, and Gamify the Scoring System.
     </p>

     <p className='me__content--title'>
      No good thing comes without its challenges
     </p>
     <p className='me__content--desc'>
      <b>&#187; I overcame loss of focus</b> on the user by regaining my
      understanding of who I was designing for.
      <br></br>
      <b>&#187; I overcame analysis paralysis</b> by stepping away for 24 hours.
     </p>
    </div>
   </div>
  </Element>
 );
};

export default MEConclusion;
