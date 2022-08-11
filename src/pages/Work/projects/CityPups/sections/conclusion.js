import '../../sections.scss';
import { Element } from 'react-scroll';

export const CPConclusion = (props) => {
 return (
  <Element id='conclusion' name='conclusion' className='project__tab'>
   <hr></hr>
   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>conclusion</h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.conclusion[0] : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.conclusion[1] : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.conclusion[2] : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.conclusion[3] : null}
     </p>
    </div>
   </div>
  </Element>
 );
};

export default CPConclusion;
