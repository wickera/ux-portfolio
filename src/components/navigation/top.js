import './top.scss';
import { useEffect } from 'react';
import { animateScroll } from 'react-scroll';

export default function Top() {
 useEffect(() => {});

 const goToTop = () => {
  animateScroll.scrollToTop();
 };

 return (
  <button onClick={goToTop} className='top'>
   Up Arrow
  </button>
 );
}
