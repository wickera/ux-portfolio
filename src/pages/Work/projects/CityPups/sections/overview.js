import '../../sections.scss';
import { Element } from 'react-scroll';

export const CPOverview = (props) => {
 return (
  <Element id='overview' name='overview' className='project__tab'>
   <hr></hr>

   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>the objective</h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.overview.objective.main : null}
     </p>
     <p className='project__tab--section--sub-section--desc'>
      <span>My Role</span>
      <br></br>
      <span>{props ? props.overview.objective.role : null}</span>
     </p>
     <div className='project__tab--section--sub-section--info'>
      <div>
       <p>Timeline</p>
       <p>{props ? props.overview.objective.timeline : null}</p>
      </div>
      <div>
       <p>Project Type</p>
       <p>{props ? props.overview.objective.projectType : null}</p>
      </div>
      <div>
       <p>Tools Used</p>
       <p>{props ? props.overview.objective.tools : null}</p>
      </div>
     </div>
    </div>
   </div>
   <hr></hr>
   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>the problem</h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.overview.problem.main : null}
     </p>
    </div>
   </div>
   <div className='project__tab--section'>
    <h4 className='project__tab--section--title'>the goal</h4>
    <div className='project__tab--section--sub-section'>
     <p className='project__tab--section--sub-section--desc'>
      {props ? props.overview.goal.main : null}
     </p>
    </div>
   </div>
   <hr></hr>
   <div className='project__tab--section column'>
    <h4 className='project__tab--section--title'>the solution</h4>
    <div className='project__tab--section--full row'>
     <img
      alt='Solution #1'
      src={props ? props.images.Mockup1 : null}
      className='project__tab--section--img'
     />
     <div className='project__tab--section--full--desc'>
      <h5>Mockup #1</h5>
      <p>
       Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget
       tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula
       elementum sed sit amet dui.
      </p>
     </div>
    </div>
    <div className='project__tab--section--full row-reverse'>
     <img
      alt='Solution #2'
      src={props ? props.images.Mockup2 : null}
      className='project__tab--section--img'
     />
     <div className='project__tab--section--full--desc'>
      <h5>Mockup #2</h5>
      <p>
       Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget
       tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula
       elementum sed sit amet dui.
      </p>
     </div>
    </div>
    <div className='project__tab--section--full row'>
     <img
      alt='Solution #3'
      src={props ? props.images.Mockup3 : null}
      className='project__tab--section--img'
     />
     <div className='project__tab--section--full--desc'>
      <h5>Mockup #3</h5>
      <p>
       Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget
       tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula
       elementum sed sit amet dui.
      </p>
     </div>
    </div>
    <div className='project__tab--section--full row-reverse'>
     <img
      alt='Solution #4'
      src={props ? props.images.Mockup4 : null}
      className='project__tab--section--img'
     />
     <div className='project__tab--section--full--desc'>
      <h5>Mockup #4</h5>
      <p>
       Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget
       tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula
       elementum sed sit amet dui.
      </p>
     </div>
    </div>
   </div>
  </Element>
 );
};

export default CPOverview;
