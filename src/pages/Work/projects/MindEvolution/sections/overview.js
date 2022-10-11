import '../../sections.scss';
import '../mindevolution.scss';
import { Element } from 'react-scroll';

export const MEOverview = (props) => {
 return (
  <Element name='overview'>
   <div className='me'>
    <h4 className='me__title'>Overview</h4>
    <div className='me__content'>
     <p className='me__content--title'>What is mind evolution?</p>
     <p className='me__content--desc'>
      Mind Evolution is a product service app on iOS designed to help people
      mental health conditions. <b>The problem:</b> on average, it takes 11
      years from the onset of mental health symptoms to receive treatment, and
      this phenomenon is called the <b>"Treatment Gap"</b>. With{' '}
      <b>280 million people worldwide who have depression</b> and{' '}
      <b>
       over 700,000 people who die from suicide yearly, Mind Evolution seeks to
       ait in reducing the Treatment Gap
      </b>{' '}
      by empowering them to take control of their healing journey through
      education and application.
     </p>
     <p className='me__content--title'>The Goal &amp; Design Objective</p>
     <p className='me__content--desc'>
      To create a visually clean, simple, seamless and accessible app that aims
      to reduce the treatment gap by{' '}
      <b>
       empowering people mental health conditions take control of their own
       mental health journey through education and application.
      </b>
     </p>
     <p className='me__content--desc'>
      <b>Challenge:</b> The time it takes to receive treatment. <br></br>
      <b>Solution:</b> Providing easily accessible services for individuals to
      receive the help they need quickly and in one place.<br></br>
      <b>Outcome:</b> More individuals receiving help in a short amount of time.
      <br></br>
      <b>Process:</b> Double Diamond.<br></br>
      <b>Result:</b> Make users feel empowered and encouraged to be proactive in
      their healing journey.<br></br>
     </p>
     <p className='me__content--title'>My Role &amp; UI/UX Design Methods</p>
     <p className='me__content--desc'>
      <b>Role:</b> solo UI/UX Designer and UX Researcher.
      <br></br>
      <b>User Research:</b> secondary research (Desktop research); heuristics,
      surveys, user interviews, moderated usability testing. <br></br>
      <b>User Experience:</b> personas, user journeys, user stories, user flows,
      empathy mapping, site mapping. <br></br>
      <b>User Interface:</b> sketches, wireframes, prototyping, visual design,
      interactive design.
     </p>
     <div className='me__content--info'>
      <div>
       <p>
        <b>Timeline</b>
       </p>
       <p>8 months</p>
      </div>
      <div>
       <p>
        <b>Project Type</b>
       </p>
       <p>{props ? props.overview.objective.projectType : null}</p>
      </div>
      <div>
       <p>
        <b>Tools Used</b>
       </p>
       <p>Figma, Miro, Marvel Pop, Hand Sketches</p>
      </div>
     </div>
    </div>
   </div>
   <hr></hr>
   <div className='me'>
    <h4 className='me__title'>the solution</h4>
    <div className='me__content'>
     <p className='me__content--title center'>
      Taking control of your mental health is essential
     </p>
    </div>
   </div>
   <div className='me__content--solution'>
    <div className='me__content--solution--column'>
     <img
      alt='personalized dashboard'
      src={props ? props.images.Solution1 : null}
      className='me__content--solution--column--img'
     />
     <p className='me__content--solution--column--desc'>
      Personalized Dashboard
     </p>
    </div>
    <div className='me__content--solution--column'>
     <img
      alt='recommendations'
      src={props ? props.images.Solution2 : null}
      className='me__content--solution--column--img'
     />
     <p className='me__content--solution--column--desc'>
      Tailored Recommendations
     </p>
    </div>
    <div className='me__content--solution--column'>
     <img
      alt='assessment question'
      src={props ? props.images.Solution3 : null}
      className='me__content--solution--column--img'
     />
     <p className='me__content--solution--column--desc'>Take an Assessment</p>
    </div>
    <div className='me__content--solution--column'>
     <img
      alt='best treatment plan recommendations'
      src={props ? props.images.Solution4 : null}
      className='me__content--solution--column--img'
     />
     <p className='me__content--solution--column--desc'>
      best treatment plan for your needs
     </p>
    </div>
    <div className='me__content--solution--column'>
     <img
      alt='track your progress'
      src={props ? props.images.Solution5 : null}
      className='me__content--solution--column--img'
     />
     <p className='me__content--solution--column--desc'>Track Your Progress</p>
    </div>
    <div className='me__content--solution--column'>
     <img
      alt='call for help'
      src={props ? props.images.Solution6 : null}
      className='me__content--solution--column--img'
     />
     <p className='me__content--solution--column--desc'>Call For Help</p>
    </div>
   </div>
  </Element>
 );
};

export default MEOverview;
