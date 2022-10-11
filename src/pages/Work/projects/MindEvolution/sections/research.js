import '../../sections.scss';
import '../mindevolution.scss';
import { Element } from 'react-scroll';

export const MEResearch = (props) => {
 return (
  <Element id='research' name='research'>
   <hr></hr>
   <div className='me'>
    <h4 className='me__title'>research</h4>
    <div className='me__content'>
     <p className='me__content--title'>the numbers you cannot ignore</p>
     <p className='me__content--desc'>
      Discovering this data was the cornerstone in building the foundation to
      find answers as to <b>why</b> these numbers are so high? And <b>what</b>{' '}
      is going on?
     </p>
    </div>
   </div>
   <div className='me__content--full'>
    <div className='me__content--full--column'>
     <img
      alt='51 point 5'
      src={props ? props.images.Fact1 : null}
      style={{ borderRadius: '1rem', width: '20vw', maxWidth: '50%' }}
     />
     <p className='me__content--full--desc'>
      Mental health conditions are common in the US, with 51.5 million adults
      having symptoms.
     </p>
    </div>
    <div className='me__content--full--column'>
     <img
      alt='650'
      src={props ? props.images.Fact2 : null}
      style={{ borderRadius: '1rem', width: '20vw', maxWidth: '50%' }}
     />
     <p className='me__content--full--desc'>
      Over 650 million people worldwide live with mental health conditions.
     </p>
    </div>
    <div className='me__content--full--column'>
     <img
      alt='30 to 50 percent'
      src={props ? props.images.Fact3 : null}
      style={{ borderRadius: '1rem', width: '20vw', maxWidth: '50%' }}
     />
     <p className='me__content--full--desc'>
      With mental health conditions on the rise, the increase in awareness, and
      mental health apps and telehealth, 30-50% of people still go untreated.
     </p>
    </div>
   </div>
   <hr></hr>
   <div className='me'>
    <div className='me__content'>
     <p className='me__content--title'>
      the people perish from a lack of knowledge
     </p>
     <p className='me__content--desc'>
      Embarking on a journey to find answers, the <b>5 individuals</b> that I{' '}
      <b>interviewed</b> ranged from 26-45 years old, had minimal knowledge of
      mental health and deal with mental health conditions of their own. They
      provided some insight that resulted in 3 main themes.
     </p>
     <ul className='me__content--desc me__content--desc--list'>
      <li>
       <b>Research -</b> The process was difficult and time consuming
      </li>
      <li>
       <b>Treatment -</b> Not easily found
      </li>
      <li>
       <b>Knowledge -</b> Minimal knowledge of mental health
      </li>
     </ul>
    </div>
   </div>
   <hr></hr>
   <div className='me column center'>
    <p className='me__content--full--quote center'>
     {props ? props.research.quote[0] : null}
    </p>
    <p className='me__content--desc'>
     {props ? props.research.quote[1] : null}
    </p>
   </div>
  </Element>
 );
};

export default MEResearch;
