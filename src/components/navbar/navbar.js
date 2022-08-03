import './navbar.scss';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

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

 return (
  <nav id='nav' ref={menu} className='nav navbar'>
   <div className='navbar__menu'>
    <button className='navbar__menu--button'>
     <i className='fa-solid fa-bars'></i>
    </button>
   </div>
   <div className='nav__title navbar__title'>
    <h1 className='nav__title--text navbar__title--text'>Mia Lewis</h1>
   </div>
   <ul className='nav__links'>
    {links(pages)}
    <li>
     <i className='fa-regular fa-envelope nav__icon'></i>
    </li>
    <li>
     <i className='fa-brands fa-linkedin-in nav__icon'></i>
    </li>
   </ul>
  </nav>
 );
}
