import './tabs.scss';
import { useState, useEffect } from 'react';
import { Link, Events } from 'react-scroll';

export const Tabs = (props) => {
 const [scrollStatus, setScrollStatus] = useState('landing');

 //  Set up event listener for scroll
 useEffect(() => {
  const fireOnScroll = () => {
   let value = document.documentElement.scrollTop;

   if (scrollStatus === 'landing' && value > 477) {
    setScrollStatus('scrolled');
   } else if (value <= 477) {
    setScrollStatus('landing');
   }
  };

  window.addEventListener('scroll', fireOnScroll, true);

  Events.scrollEvent.register('begin');
  Events.scrollEvent.register('end');

  return () => {
   Events.scrollEvent.remove('begin');
   Events.scrollEvent.remove('end');
  };
 }, [scrollStatus]);

 //  Sets each tab link to corresponding element
 let sections = props.project.sections.map((e, i) => {
  return (
   <li key={i} role='tab'>
    <Link
     className='tabs__list--link'
     activeClass='tabs__list--link-active'
     to={e.link}
     spy={true}
     smooth={true}
     hashSpy={true}
     isDynamic={true}
     offset={-200}
     duration={1000}
     delay={0}
     spyThrottle={0}>
     {e.name}
    </Link>
   </li>
  );
 });

 return (
  <>
   {/* Sets tabs bar based on user scroll status */}
   {scrollStatus === 'landing' ? (
    <nav
     role='tablist'
     className='tabs__list--static'
     style={{ backgroundImage: `url(${props.bannerImg})` }}>
     <h4 className='tabs__title'>{props.project.ProjectName}</h4>
     <ul>{sections}</ul>
    </nav>
   ) : (
    <nav
     role='tablist'
     className='tabs__list--sticky'
     style={{ backgroundImage: `url(${props.bannerImg})` }}>
     <h4 className='tabs__title'>{props.project.ProjectName}</h4>
     <ul>{sections}</ul>
    </nav>
   )}
  </>
 );
};

export default Tabs;
