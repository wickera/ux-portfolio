import '../../sections.scss';
import { Element } from 'react-scroll';

export const CPImplementation = (props) => {
 return (
  <Element id='implementation' name='implementation' className='project__tab'>
   <hr></hr>

   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>day four: prototype</h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.implementation.prototype[0] : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.implementation.prototype[1] : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.implementation.prototype[2] : null}
     </p>
     <img
      alt='City Pups mock up'
      src={props ? props.images.Mockup1 : null}
      className='project__tab--section--sub-section--img'
     />
    </div>
   </div>
   <hr></hr>

   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>day five: test</h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.implementation.test[0] : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.implementation.test[1] : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.implementation.test[2] : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.implementation.test[3] : null}
     </p>
     <img
      alt='testing'
      src={props ? props.images.Group9 : null}
      className='project__tab--section--sub-section--img'
     />
    </div>
   </div>
   <hr></hr>

   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>
     these were some major key findings &amp; changes
    </h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.implementation.findings[0] : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.implementation.findings[1] : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.implementation.findings[2] : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.implementation.findings[3] : null}
     </p>
    </div>
   </div>
   <hr></hr>

   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>challenge</h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.implementation.challenge : null}
     </p>
    </div>
   </div>
  </Element>
 );
};

export default CPImplementation;
