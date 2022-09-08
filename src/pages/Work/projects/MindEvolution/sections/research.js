import '../../sections.scss';
import { Element } from 'react-scroll';

export const MEResearch = (props) => {
 return (
  <Element id='research' name='research'>
   <hr></hr>
   <div className='tab-section'>
    <h4 className='tab-section__title'>research</h4>
    <div className='tab-section__content'>
     <p className='tab-section__content--desc'>
      {props ? props.research.research[0] : null}
     </p>
    </div>
   </div>
   <div className='tab-section__full'>
    <img
     alt='Solution #2'
     src={props ? props.images.Fact1 : null}
     className='tab-section__content--row-img'
    />
    <p className='tab-section__content--desc'>
     {props ? props.research.research[1] : null}
    </p>
   </div>
   <div className='tab-section__full row-reverse'>
    <img
     alt='Solution #2'
     src={props ? props.images.Fact2 : null}
     className='tab-section__content--row-img'
    />
    <p className='tab-section__content--desc'>
     {props ? props.research.research[2] : null}
    </p>
   </div>
   <div className='tab-section__full'>
    <img
     alt='Solution #2'
     src={props ? props.images.Fact3 : null}
     className='tab-section__content--row-img'
    />
    <p className='tab-section__content--desc center'>
     {props ? props.research.research[3] : null}
    </p>
   </div>
   <hr></hr>
   <div className='tab-section'>
    <h4 className='tab-section__title'>user interviews</h4>
    <div className='tab-section__content'>
     <p className='tab-section__content--desc'>
      {props ? props.research.interviews[0] : null}
     </p>
     <p className='tab-section__content--desc'>
      {props ? props.research.interviews[1] : null}
     </p>
     <ul className='tab-section__content--desc tab-section__content--desc--list'>
      <li>{props ? props.research.interviews[2] : null}</li>
      <li>{props ? props.research.interviews[3] : null}</li>
      <li>{props ? props.research.interviews[4] : null}</li>
      <li>{props ? props.research.interviews[5] : null}</li>
     </ul>
    </div>
   </div>
   <hr></hr>
   <div className='tab-section'>
    <h4 className='tab-section__title'>survey</h4>
    <div className='tab-section__content'>
     <p className='tab-section__content--desc'>
      {props ? props.research.survey[0] : null}
     </p>
    </div>
   </div>
   <div className='tab-section__full'>
    <img
     alt='Pie chart at 72 percent'
     src={props ? props.images.ME72 : null}
     className='tab-section__content--row-img'
    />
    <p className='tab-section__content--desc'>
     72% - {props ? props.research.survey[1] : null}
    </p>
   </div>
   <div className='tab-section__full row-reverse'>
    <img
     alt='Pie chart at 32 percent'
     src={props ? props.images.ME32 : null}
     row-
     className='tab-section__content--row-img'
    />
    <p className='tab-section__content--desc'>
     32% - {props ? props.research.survey[2] : null}
    </p>
   </div>
   <div className='tab-section__full'>
    <img
     alt='Pie chart at 52 percent'
     src={props ? props.images.ME52 : null}
     className='tab-section__content--row-img'
    />
    <p className='tab-section__content--desc'>
     52% - {props ? props.research.survey[3] : null}
    </p>
   </div>
   <hr></hr>
   <div className='tab-section'>
    <h4 className='tab-section__title'>these were some major key insights</h4>
    <div className='tab-section__content center'>
     <img
      alt='Solution #2'
      src={props ? props.images.emoji1 : null}
      className='tab-section__content--icon'
     />
     <p className='tab-section__content--desc'>
      {props ? props.research.insights[0] : null}
     </p>
     <img
      alt='Solution #2'
      src={props ? props.images.emoji2 : null}
      className='tab-section__content--icon'
     />
     <p className='tab-section__content--desc'>
      {props ? props.research.insights[1] : null}
     </p>
     <img
      alt='Solution #2'
      src={props ? props.images.Emoji3 : null}
      className='tab-section__content--icon'
     />
     <p className='tab-section__content--desc'>
      {props ? props.research.insights[2] : null}
     </p>
     <img
      alt='Solution #2'
      src={props ? props.images.emoji4 : null}
      className='tab-section__content--icon'
     />
     <p className='tab-section__content--desc'>
      {props ? props.research.insights[3] : null}
     </p>
     <img
      alt='Solution #2'
      src={props ? props.images.emoji5 : null}
      className='tab-section__content--icon'
     />
     <p className='tab-section__content--desc'>
      {props ? props.research.insights[4] : null}
     </p>
     <img
      alt='Solution #2'
      src={props ? props.images.emoji6 : null}
      className='tab-section__content--icon'
     />
     <p className='tab-section__content--desc'>
      {props ? props.research.insights[5] : null}
     </p>
    </div>
   </div>
   <hr></hr>
   <div className='tab-section'>
    <p className='tab-section__content--desc'>
     {props ? props.research.quote[0] : null}
     <br></br>
     {props ? props.research.quote[1] : null}
    </p>
   </div>
  </Element>
 );
};

export default MEResearch;
