import '../../sections.scss';
import { Element } from 'react-scroll';

export const MEOverview = (props) => {
 return (
  <Element id='overview' name='overview' className='project__tab'>
   <hr></hr>
   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>Overview</h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {/* {props ? props.overview.objective.main : null} */}
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

export default MEOverview;
