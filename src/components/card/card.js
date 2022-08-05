import { Link } from 'react-router-dom';
import './card.scss';

export const Card = (props) => {
 const orientation =
  props.project.index % 2 === 1 ? 'card' : 'card card__reverse';
 return (
  <div className={orientation}>
   <div className='card__image'>
    <img src={props.image} alt={props.alt} className='card__img' />
   </div>
   <div className='card__details'>
    <h5 className='card__project'>{props.project.ProjectName}</h5>
    <p className='card__project--desc'>{props.project.ProjectDescription}</p>
    <Link to={props.project.link} replace>
     <button className='card__button'>View Case Study</button>
    </Link>
    <hr></hr>
    <div className='card__faq'>
     <div className='card__faq--left'>
      <h6 className='card__faq--info'>My Role</h6>
      <p className='card__faq--desc'>{props.project.RoleDescription}</p>
     </div>
     <div className='card__faq--right'>
      <h6 className='card__faq--info'>Main Goal</h6>
      <p className='card__faq--desc'>{props.project.GoalDescription}</p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Card;
