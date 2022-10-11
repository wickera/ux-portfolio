import '../../sections.scss';
import { Element } from 'react-scroll';

export const MEImplementation = (props) => {
 return (
  <Element id='implementation' name='implementation'>
   <hr></hr>
   <div className='me'>
    <h4 className='me__title'>implementation</h4>
    <div className='me__content'>
     <p className='me__content--title'>
      Put your ideas where your prototype is
     </p>
     <p className='me__content--desc'>
      I conducted <b>two rounds of moderated usability tests</b> with 5
      different participants per round. The goal was to determine:
      <br></br>
      1. {props ? props.implementation.prototype[2] : null}
      <br></br>
      2. {props ? props.implementation.prototype[3] : null}
      <br></br>
      3. {props ? props.implementation.prototype[4] : null}
     </p>
    </div>
   </div>
   <a
    style={{ textDecoration: 'none' }}
    href='https://www.figma.com/proto/BkOSALuLpQzyBmETefWSCC/Wireframes?page-id=648%3A2923&node-id=648%3A3011&starting-point-node-id=648%3A3011'
    target='_blank'
    rel='noreferrer'>
    <div className='me__content--full center'>
     <img
      alt='iPhone with mind evolution home page'
      src={props ? props.images.Group353 : null}
      style={{ width: '25%' }}
     />
     <button className='me__button'>View Clickable Prototype</button>
    </div>
   </a>
   <hr></hr>
   <div className='me'>
    <div className='me__content'>
     <p className='me__content--title'>What did they say?</p>
     <p className='me__content--desc'>
      The <b>feedback from my users</b> were important to understand what works
      for them and what does not. <b>Things that did not work</b> were:
     </p>
     <p className='me__content--desc'>
      1. <b>"How are you feeling today?" Button -</b> users were confused of
      where they would be lead.
      <br></br>
      2. <b>Assessment check-in screen -</b> users took a long time to get
      through assessment.
      <br></br>
      3. <b>Scoring system -</b> users had difficulty understanding.
      <br></br>
      4. <b>Recommended videos -</b> users had difficulty locating.
      <br></br>
      5. <b>Tracking feature -</b> users expected to keep track of their
      progress.
      <br></br>
      6. <b>Results synopsis -</b> users preferred a short synopsis.
     </p>
    </div>
   </div>
   <div className='me__content--full'>
    <img
     alt='iPhone with mental assessment'
     src={props ? props.images.MErevision1 : null}
     style={{ width: '15%' }}
    />
    <img
     alt='iPhone with assessment results'
     src={props ? props.images.MErevision2 : null}
     style={{ width: '15%' }}
    />
    <img
     alt='iPhone with assessment results'
     src={props ? props.images.MErevision3 : null}
     style={{ width: '15%' }}
    />
   </div>
   <div className='me'>
    <div className='me__content'>
     <p className='me__content--title'>They said it, I applied it</p>
     <p className='me__content--desc'>
      KEY CHANGES
      <br></br>
      1. <b>Rephrased Home CTA button to "Track your mental health" -</b>{' '}
      provide clarity for user.
      <br></br>
      2. <b>Changed UI of the assessment screen -</b> provide familiarity with
      patterns and clarity with context.
      <br></br>
      3. <b>Added a label to home screen -</b> provide clarity of what the score
      is
      <br></br>
      4. <b>Increased images on home screen -</b> help users to easily locate
      recommended resources.
      <br></br>
      5. <b>Added tracking feature</b>
      <br></br>
      6. <b>Added short synopsis to results screen -</b> provided a description
      of the scoring system and their results.
     </p>
    </div>
   </div>
   <div className='me__content--full'>
    <img
     alt='iPhone with mental assessment'
     src={props ? props.images.ME2nditeration : null}
     style={{ width: '80%' }}
    />
   </div>
   <p className='me__content--desc'></p>
  </Element>
 );
};

export default MEImplementation;
