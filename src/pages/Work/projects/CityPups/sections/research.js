import '../../sections.scss';
import { Element } from 'react-scroll';

export const CPResearch = (props) => {
 return (
  <Element id='research' name='research' className='project__tab'>
   <hr></hr>

   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>the problem</h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.research.problem : null}
     </p>
     <img
      alt='Design Sprint sticky note map'
      src={props ? props.images.DesignSprintGraphic : null}
      className='project__tab--section--sub-section--img'
     />
    </div>
   </div>
   <hr></hr>

   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>
     day one: understand &amp; map
    </h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.research.understand : null}
     </p>
     <img
      alt='User Interview Charts'
      src={props ? props.images.Interviews : null}
      className='project__tab--section--sub-section--img'
     />
    </div>
   </div>
   <hr></hr>

   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>affinity map</h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.research.affinity : null}
     </p>
     <img
      alt='Affinity Map'
      src={props ? props.images.AffinityMap : null}
      className='project__tab--section--sub-section--img'
     />
    </div>
   </div>
   <hr></hr>

   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>personas</h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.research.personas : null}
     </p>
     <img
      alt='Woman greeting white puppy'
      src={props ? props.images.Ellie : null}
      className='project__tab--section--sub-section--img'
     />
    </div>
   </div>
   <hr></hr>

   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>mapping</h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.research.mapping : null}
     </p>
     <img
      alt='User Flow Mapping'
      src={props ? props.images.Userflowmapping : null}
      className='project__tab--section--sub-section--img'
     />
    </div>
   </div>
  </Element>
 );
};

export default CPResearch;
