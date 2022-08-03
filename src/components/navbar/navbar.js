import './navbar.scss';
import 'animate.css';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Navbar() {
 const [open, setOpen] = useState(false);
 const menu = useRef(null);
 const isHidden = open ? true : false;
 const tabIndex = isHidden ? 0 : -1;

 const pages = [
  { name: 'home', link: '/' },
  { name: 'work', link: '/work' },
  { name: 'about', link: '/about' }
 ];

 const icons = [
  { link: 'https://linkedin.com/in/wickera', icon: 'fa-brands fa-linkedin-in' },
  { link: 'https://linkedin.com/in/wickera', icon: 'fa-regular fa-envelope' }
 ];

 const links = (routes) => {
  return routes.map((e, i) => {
   return (
    <li key={i}>
     <Link
      to={e.link}
      replace
      tabIndex={tabIndex}
      className='nav__links--link'
      onClick={() => setOpen(!open)}>
      {e.name}
     </Link>
    </li>
   );
  });
 };

 const socialMedia = () => {
  return icons.map((e, i) => {
   let icon = `${e.icon} nav__icon`;
   return (
    <li key={i}>
     <a
      href={e.link}
      replace='true'
      target='_blank'
      rel='noopener noreferrer'
      onClick={() => setOpen(!open)}>
      <i className={icon} aria-hidden='true'></i>
     </a>
    </li>
   );
  });
 };

 return (
  <nav id='nav' ref={menu} className='nav navbar'>
   <div className='navbar__menu'>
    <button
     className='navbar__menu-slideout--button'
     aria-label={isHidden ? 'Open Menu' : 'Close Menu'}
     onClick={() => setOpen(!open)}
     aria-expanded={!isHidden}>
     <i className='fa-solid fa-bars'></i>
    </button>
   </div>
   <CSSTransition
    in={!open}
    timeout={1000}
    classNames={{
     enterActive: 'navbar__menu-slideout-enter-active',
     exitActive: 'navbar__menu-slideout-exit-active'
    }}
    unmountOnExit>
    <ul className='navbar__menu-slideout'>
     {links(pages)}
     <div className='navbar__menu-slideout--icons'>{socialMedia()}</div>
    </ul>
   </CSSTransition>
   <div className='nav__title navbar__title'>
    <h1 className='nav__title--text navbar__title--text'>Mia Lewis</h1>
   </div>
   <ul className='nav__links'>
    {links(pages)}
    {socialMedia()}
   </ul>
  </nav>
 );
}
