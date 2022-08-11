import '../../sections.scss';
import { Element } from 'react-scroll';

export const NLFImplementation = (props) => {
 return (
  <Element id='implementation' name='implementation' className='project__tab'>
   <hr></hr>
   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>implementation</h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {/* {props ? props.conclusion.objective.main : null} */}
     </p>
     {/* <img
         alt='Solution #1'
         src={props ? props.images.Mockup1 : null}
         className='project__tab--section--img'
        /> */}
    </div>
   </div>
  </Element>
 );
};

export default NLFImplementation;
