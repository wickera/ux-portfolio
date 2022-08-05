import './tabs.scss';
import { useState, useEffect } from 'react';
import { Link, Events } from 'react-scroll';

// Import Sections to display
import Overview from './sections/overview';
import Research from './sections/research';
import Synthesis from './sections/synthesis';
import Ideation from './sections/ideation';
import Implementation from './sections/implementation';
import Conclusion from './sections/conclusion';

export const Tabs = (props) => {
 const [scrollStatus, setScrollStatus] = useState('landing');

 //  Set up event listener for scroll
 useEffect(() => {
  const fireOnScroll = () => {
   let value = document.documentElement.scrollTop;

   if (scrollStatus === 'landing' && value > 900) {
    setScrollStatus('scrolled');
   } else if (value <= 900) {
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
   <li key={i}>
    <Link
     className='tabs__link'
     activeClass='tabs__link--active'
     to={e.link}
     spy={true}
     smooth={true}
     hashSpy={true}
     isDynamic={true}
     duration={1000}
     delay={500}
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
    <ul className='tabs__static'>{sections}</ul>
   ) : (
    <ul className='tabs__sticky'>{sections}</ul>
   )}

   {/* Each section with each project's props passed along */}
   <Overview overview={props.project.overview} images={props.images} />
   <Research research={props.project.research} images={props.images} />
   <Synthesis synthesis={props.project.synthesis} images={props.images} />
   <Ideation ideation={props.project.ideation} images={props.images} />
   <Implementation
    implementation={props.project.implementation}
    images={props.images}
   />
   <Conclusion conclusion={props.project.conclusion} images={props.images} />
  </>
 );
};

export default Tabs;
