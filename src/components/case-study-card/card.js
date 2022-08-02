import miafair from '../../assets/images/miafair.jpg';
import './card.css';

export default function Card() {
 return (
  <div className='card'>
   <div className='card__left'>
    <img src={miafair} alt='card' className='card__img' />
   </div>
   <div className='card__right'>
    <h6 className='card__project'>Project Name</h6>
    <p className='card__project--desc'>project description</p>
    <button className='card__button'>Go to project</button>
    <br></br>
    <div>
     <div>
      <h7 className='card__faq'>My Role</h7>
      <p className='card__faq--desc'>
       I was the lead User Researcher for the 6 week project
      </p>
     </div>
     <div>
      <h7 className='card__faq'>Main Goal</h7>
      <p className='card__faq--desc'>
       Learn how surfers share info about weather and breaks
      </p>
     </div>
    </div>
   </div>
  </div>
 );
}
