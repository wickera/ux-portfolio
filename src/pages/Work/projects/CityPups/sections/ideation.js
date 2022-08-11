import '../../sections.scss';
import { Element } from 'react-scroll';

export const CPIdeation = (props) => {
 return (
  <Element id='ideation' name='ideation' className='project__tab'>
   <hr></hr>

   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>
     day two: sketch the solution
    </h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.ideation.sketch : null}
     </p>
     <img
      alt='City Pups Mapping'
      src={props ? props.images.LighteningDemo2 : null}
      className='project__tab--section--sub-section--img'
     />
    </div>
   </div>
   <hr></hr>

   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>lightening demos</h4>
    <div className='project__tab--section--sub-section column'>
     <div className='project__tab--section--sub-section padding'>
      <h6 className='project__tab--section--title  margin'>Puppyshot</h6>
      <p className='project__tab--section--sub-section--desc  margin'>
       {props ? props.ideation.lightening.puppyshot[0] : null}
      </p>
      <p className='project__tab--section--sub-section--desc  margin'>
       {props ? props.ideation.lightening.puppyshot[1] : null}
      </p>
      <p className='project__tab--section--sub-section--desc  margin'>
       {props ? props.ideation.lightening.puppyshot[2] : null}
      </p>
      <img
       alt='City Pups Mapping'
       src={props ? props.images.LighteningDemo12 : null}
       className='project__tab--section--sub-section--img'
      />
     </div>

     <div className='project__tab--section--sub-section padding'>
      <h6 className='project__tab--section--title margin'>Pet Finder</h6>
      <p className='project__tab--section--sub-section--desc margin'>
       {props ? props.ideation.lightening.petfinder[0] : null}
      </p>
      <p className='project__tab--section--sub-section--desc  margin'>
       {props ? props.ideation.lightening.petfinder[1] : null}
      </p>
      <p className='project__tab--section--sub-section--desc  margin'>
       {props ? props.ideation.lightening.petfinder[2] : null}
      </p>
      <img
       alt='City Pups Mapping'
       src={props ? props.images.crazy81 : null}
       className='project__tab--section--sub-section--img'
      />
     </div>

     <div className='project__tab--section--sub-section padding'>
      <h6 className='project__tab--section--title  margin'>Proven</h6>
      <p className='project__tab--section--sub-section--desc  margin'>
       {props ? props.ideation.lightening.proven[0] : null}
      </p>
      <p className='project__tab--section--sub-section--desc  margin'>
       {props ? props.ideation.lightening.proven[1] : null}
      </p>
      <p className='project__tab--section--sub-section--desc  margin'>
       {props ? props.ideation.lightening.proven[2] : null}
      </p>
      <img
       alt='City Pups Mapping'
       src={props ? props.images.Crazy81 : null}
       className='project__tab--section--sub-section--img'
      />
     </div>
    </div>
   </div>
   <hr></hr>

   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>crazy 8's</h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.ideation.crazy[0] : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.ideation.crazy[1] : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.ideation.crazy[2] : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.ideation.crazy[3] : null}
     </p>
     <img
      alt='City Pups Mapping'
      src={props ? props.images.DesignSprintGraphic : null}
      className='project__tab--section--sub-section--img'
     />
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.ideation.crazy[4] : null}
     </p>
     <img
      alt='City Pups Mapping'
      src={props ? props.images.Storyboard1 : null}
      className='project__tab--section--sub-section--img'
     />
    </div>
   </div>
   <hr></hr>

   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>day three: decide</h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.ideation.decide[0] : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.ideation.decide[1] : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.ideation.decide[2] : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.ideation.decide[3] : null}
     </p>
     <img
      alt='City Pups Mapping'
      src={props ? props.images.DesignSprintGraphic : null}
      className='project__tab--section--sub-section--img'
     />
    </div>
   </div>
  </Element>
 );
};

export default CPIdeation;
