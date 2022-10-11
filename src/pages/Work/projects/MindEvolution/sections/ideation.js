import '../../sections.scss';
import { Element } from 'react-scroll';

export const MEIdeation = (props) => {
 return (
  <Element id='ideation' name='ideation'>
   <hr></hr>
   <div className='me'>
    <h4 className='me__title'>ideation</h4>
    <div className='me__content'>
     <p className='me__content--title'>ideas come in like a flood</p>
     <p className='me__content--desc'>
      Using the personas as the forerunner for <b>brainstorming the solution</b>
      , the development of the <b>"How Might We" statements</b> allowed me to
      have a targeted microscopic view of their specific problems.
     </p>
     <p className='me__content--desc'>
      <b>&#187; {props ? props.ideation.how[1] : null}</b>
     </p>
     <p className='me__content--desc'>
      <b>&#187; {props ? props.ideation.how[2] : null}</b>
     </p>
     <p className='me__content--desc'>
      <b>&#187; {props ? props.ideation.how[3] : null}</b>
     </p>
     <p className='me__content--desc'>
      <b>&#187; {props ? props.ideation.how[4] : null}</b>
     </p>
     <p className='me__content--desc'>
      <b>&#187; {props ? props.ideation.how[5] : null}</b>
     </p>
    </div>
   </div>
   <div className='me__content--full'>
    <div className='column'>
     <img
      alt='ideation brainstorming chart'
      src={props ? props.images.HMW1 : null}
      style={{ width: '100%' }}
     />
    </div>
    <div className='column'>
     <img
      alt='brainstorming index cards on wall'
      src={props ? props.images.MEbrainstorm2 : null}
      style={{ width: '100%' }}
     />
     <img
      alt='brainstorming index cards on wall'
      src={props ? props.images.MEbrainstorm : null}
      style={{ width: '100%' }}
     />
     <img
      alt='brainstorming index cards on wall'
      src={props ? props.images.MEbrainstorm3 : null}
      style={{ width: '100%' }}
     />
    </div>
   </div>
   <hr></hr>
   <div className='me'>
    <div className='me__content'>
     <p className='me__content--title'>
      building the blueprint of the experience
     </p>
     <p className='me__content--desc'>
      Visually organizing a plan to see the <b>journey my users</b> will take
      while using the app, I developed <b>3 main flows</b> that caters to my
      users' experience.
     </p>
     <p className='me__content--desc'>
      <b>User Flow 1: Coping Techniques</b>
     </p>
     <p className='me__content--desc'>
      &#187; As a user, I want to explore different coping
      techniques/treatments.
     </p>
     <p className='me__content--desc'>
      <b>User Flow 2: Take an Assessment</b>
     </p>
     <p className='me__content--desc'>
      &#187; As a user, I want to take an assessment to find out my mental
      state.
     </p>
     <p className='me__content--desc'>
      <b>User Flow 3: Speak with a Therapist</b>
     </p>
     <p className='me__content--desc'>
      &#187; As a user, I want to be able to talk to a Therapist whenever I need
      to.
     </p>
    </div>
   </div>
   <div className='me__content--full'>
    <img
     alt='design structure sitemap tree'
     src={props ? props.images.IA1 : null}
     style={{ width: '100%' }}
    />
   </div>
   <hr></hr>
   <div className='me'>
    <div className='me__content'>
     <p className='me__content--title'>User stories &amp; user flows</p>
    </div>
   </div>
   <div className='me__full center'>
    <img
     alt='user journey flow'
     src={props ? props.images.Userjourney2 : null}
     style={{ width: '40%' }}
    />
    <img
     alt='user flow structure'
     src={props ? props.images.MEuserflow : null}
     style={{ width: '50%' }}
    />
   </div>
   <p className='me__content--desc'></p>
   <hr></hr>
   <div className='me'>
    <div className='me__content'>
     <p className='me__content--title'>Set the tone</p>
     <p className='me__content--desc'>
      It was time to give the app a purposeful name. "Mind Evolution" summed up
      what this app is all about;{' '}
      <b>"M.E." encompassing the importance of ME</b>, by empowering users to
      take control of their mind, grow, learn, and heal. Mind Evolution is{' '}
      <b>uplifting, encouraging, insightful, accessible, and trustworthy.</b>
     </p>
    </div>
   </div>
   <div className='me__content--full center'>
    <img
     alt='orange and blue branding theme collage'
     src={props ? props.images.Branding : null}
     style={{ width: '60%' }}
    />
   </div>
   <div className='me__content--full center '>
    <img
     alt='mind evolution logo'
     src={props ? props.images.MELogo : null}
     style={{ width: '40%' }}
    />
    <img
     alt='mind evolution orange and blue color pallete'
     src={props ? props.images.MEstylecolors : null}
     style={{ width: '55%' }}
    />
   </div>
   <hr></hr>
   <div className='me'>
    <div className='me__content'>
     <p className='me__content--title'>
      Now let's draw... from sketches to wireframes
     </p>
    </div>
   </div>
   <div
    style={{
     display: 'flex',
     flexWrap: 'wrap',
     margin: 'auto',
     justifyContent: 'center',
     alignItems: 'center'
    }}>
    <div className='column center' style={{ width: '40%', padding: '1rem' }}>
     <p
      className='me__content--title'
      style={{ textAlign: 'center', paddingBottom: '0.5rem' }}>
      Coping Techniques
     </p>
     <img
      alt='coping techniques sketch design'
      src={props ? props.images.skt1 : null}
      className='me__content--img'
     />
     <p className='me__content--desc left'>
      1. The user would select the “My Mental Health” tab, route to the
      dashboard screen. The user selects one of the generated coping techniques,
      they are routed to that specific screen.
     </p>
    </div>
    <div className='column center' style={{ width: '40%', padding: '1rem' }}>
     <p
      className='me__content--title'
      style={{ textAlign: 'center', paddingBottom: '0.5rem' }}>
      Take an Assessment
     </p>
     <img
      alt='assessment flow sketch design'
      src={props ? props.images.skt2 : null}
      className='me__content--img'
     />
     <p className='me__content--desc left'>
      2. The user takes the assessment and receives their results. On the
      results screen, there will be a description of their mental health
      condition (which is not a diagnosis).
     </p>
    </div>
    <div className='column center' style={{ width: '40%', padding: '1rem' }}>
     <p
      className='me__content--title'
      style={{ textAlign: 'center', paddingBottom: '0.5rem' }}>
      Speak to a therapist
     </p>
     <img
      alt='call a therapist sketch design'
      src={props ? props.images.skt3 : null}
      className='me__content--img'
     />
     <p className='me__content--desc left'>
      3. The user selects the “Call Now” tab to speak with a Therapist. Routed
      to the “call now” screen, where they would choose the CTA contact number
      button.
     </p>
    </div>
   </div>
   <hr></hr>
   <div className='me'>
    <div className='me__content'>
     <p className='me__content--title'>Taking a wrong turn in UI</p>
     <p className='me__content--desc'>
      The mistake I made was{' '}
      <b>not carrying over the user perspective into the design</b> of the
      wireframes. I was focused on providing everything the user needed but the
      down fall was displaying all the information on one screen. This caused
      cognitive overload and brand misalignment. To <b>solve this issue</b>, I
      turned back to the <b>personas, design principles and style guide.</b>
     </p>
     <div className='me__content--full column'>
      <p className='me__content--title'>Before</p>
      <img
       alt='screens before persona research'
       src={props ? props.images.MEHifi1 : null}
       style={{ width: '100%' }}
      />
     </div>
     <div className='me__content--full column'>
      <p className='me__content--title'>After</p>
      <img
       alt='screens after persona research'
       src={props ? props.images.MEHifi2 : null}
       style={{ width: '100%' }}
      />
     </div>
    </div>
   </div>
  </Element>
 );
};

export default MEIdeation;
