import '../../sections.scss';
import { Element } from 'react-scroll';

export const MEIdeation = (props) => {
 return (
  <Element id='ideation' name='ideation'>
   <hr></hr>
   <div className='tab-section'>
    <h4 className='tab-section__title'>how might we</h4>
    <div className='tab-section__content'>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.how[0] : null}
     </p>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.how[1] : null}
     </p>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.how[2] : null}
     </p>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.how[3] : null}
     </p>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.how[4] : null}
     </p>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.how[5] : null}
     </p>
    </div>
   </div>
   <div className='tab-section__full'>
    <img
     alt='ideation brainstorming chart'
     src={props ? props.images.Group461 : null}
     className='tab-section__content--img'
    />
   </div>
   <hr></hr>
   <div className='tab-section'>
    <h4 className='tab-section__title'>brainstorming</h4>
    <div className='tab-section__content'>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.brainstorm[0] : null}
     </p>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.brainstorm[1] : null}
     </p>
    </div>
   </div>
   <div className='tab-section__full'>
    <img
     alt='brainstorming index cards on wall'
     src={props ? props.images.MEbrainstorm : null}
     className='tab-section__content--row-img'
    />
   </div>
   <div className='tab-section__full'>
    <img
     alt='brainstorming index cards on wall'
     src={props ? props.images.MEbrainstorm2 : null}
     className='tab-section__content--row-img'
    />
   </div>
   <div className='tab-section__full'>
    <img
     alt='brainstorming index cards on wall'
     src={props ? props.images.MEbrainstorm3 : null}
     className='tab-section__content--row-img'
    />
   </div>
   <hr></hr>
   <div className='tab-section'>
    <h4 className='tab-section__title'>informational architecture</h4>
    <div className='tab-section__content'>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.architecture : null}
     </p>
    </div>
   </div>
   <div className='tab-section__full'>
    <img
     alt='design structure sitemap tree'
     src={props ? props.images.IA1 : null}
     className='tab-section__content--img'
    />
   </div>
   <hr></hr>
   <div className='tab-section'>
    <h4 className='tab-section__title'>user stories</h4>
    <div className='tab-section__content'>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.stories[0] : null}
     </p>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.stories[1] : null}
     </p>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.stories[2] : null}
     </p>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.stories[3] : null}
     </p>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.stories[4] : null}
     </p>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.stories[5] : null}
     </p>
    </div>
   </div>
   <div className='tab-section__full'>
    <img
     alt='epics and user journeys'
     src={props ? props.images.uj6 : null}
     className='tab-section__content--img'
    />
   </div>
   <div className='tab-section__full'>
    <img
     alt='epics and user journeys'
     src={props ? props.images.uj6 : null}
     className='tab-section__content--img'
    />
   </div>
   <hr></hr>
   <div className='tab-section'>
    <h4 className='tab-section__title'>user flow</h4>
    <div className='tab-section__content'>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.flow : null}
     </p>
    </div>
   </div>
   <div className='tab-section__full'>
    <img
     alt='3 user flows: coping, assessment, find therapist'
     src={props ? props.images.MEuserflow : null}
     className='tab-section__content--img'
    />
   </div>
   <hr></hr>
   <div className='tab-section'>
    <h4 className='tab-section__title'>sketches</h4>
    <div className='tab-section__content'>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.sketches[0] : null}
     </p>
    </div>
   </div>
   <div className='tab-section__full'>
    <img
     alt='3 mobile sketches'
     src={props ? props.images.Group467 : null}
     className='tab-section__content--row-img'
    />
    <p className='tab-section__content--desc'>
     {props ? props.ideation.sketches[1] : null}
    </p>
   </div>
   <div className='tab-section__full row-reverse'>
    <img
     alt='4 mobile sketches'
     src={props ? props.images.Group469 : null}
     className='tab-section__content--row-img'
    />
    <p className='tab-section__content--desc'>
     {props ? props.ideation.sketches[2] : null}
    </p>
   </div>
   <div className='tab-section__full'>
    <img
     alt='2 mobile sketches'
     src={props ? props.images.Group470 : null}
     className='tab-section__content--row-img'
    />
    <p className='tab-section__content--desc'>
     {props ? props.ideation.sketches[3] : null}
    </p>
   </div>
   <hr></hr>
   <div className='tab-section'>
    <h4 className='tab-section__title'>guerilla testing</h4>
    <div className='tab-section__content'>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.guerilla : null}
     </p>
    </div>
   </div>
   <hr></hr>
   <div className='tab-section'>
    <h4 className='tab-section__title'>these were some major key insights</h4>
    <div className='tab-section__content'>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.insights[0] : null}
      <br></br>
      {props ? props.ideation.insights[1] : null}
     </p>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.insights[2] : null}
      <br></br>
      {props ? props.ideation.insights[3] : null}
     </p>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.insights[4] : null}
      <br></br>
      {props ? props.ideation.insights[5] : null}
     </p>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.insights[6] : null}
      <br></br>
      {props ? props.ideation.insights[7] : null}
     </p>
    </div>
   </div>
   <hr></hr>
   <div className='tab-section'>
    <h4 className='tab-section__title'>low fidelity wireframes</h4>
    <div className='tab-section__content'>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.wireframes : null}
     </p>
    </div>
   </div>
   <div className='tab-section__full'>
    <img
     alt='low fidelity wireframes'
     src={props ? props.images.MEWireframes : null}
     className='tab-section__content--img'
    />
   </div>
   <hr></hr>
   <div className='tab-section'>
    <h4 className='tab-section__title'>branding</h4>
    <div className='tab-section__content'>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.branding : null}
     </p>
    </div>
   </div>
   <div className='tab-section__full'>
    <img
     alt='6 images for branding theme'
     src={props ? props.images.Branding : null}
     className='tab-section__content--img'
    />
   </div>
   <div className='tab-section__full'>
    <img
     alt='standardized padding and margin'
     src={props ? props.images.MELogo : null}
     className='tab-section__content--row-img'
    />
    <img
     alt='color pallettes'
     src={props ? props.images.MEstylecolors : null}
     className='tab-section__content--row-img'
    />
   </div>
   <hr></hr>
   <div className='tab-section'>
    <h4 className='tab-section__title'>High fidelity screens</h4>
    <div className='tab-section__content'>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.screens : null}
     </p>
    </div>
   </div>
   <div className='tab-section__full'>
    <p className='tab-section__content--title center'>Before</p>
   </div>
   <div className='tab-section__full'>
    <img
     alt='6 high fidelity wireframe screens before testing'
     src={props ? props.images.MEHifi1 : null}
     className='tab-section__content--img'
    />
   </div>
   <div className='tab-section__full'>
    <p className='tab-section__content--title center'>After</p>
   </div>
   <div className='tab-section__full'>
    <img
     alt='6 high fidelity wireframe screens after testing'
     src={props ? props.images.MEHifi2 : null}
     className='tab-section__content--img'
    />
   </div>
   <hr></hr>
   <div className='tab-section'>
    <h4 className='tab-section__title'>challenge</h4>
    <div className='tab-section__content'>
     <p className='tab-section__content--desc'>
      {props ? props.ideation.challenge : null}
     </p>
    </div>
   </div>
  </Element>
 );
};

export default MEIdeation;
