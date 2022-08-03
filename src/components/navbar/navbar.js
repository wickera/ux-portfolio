import './navbar.scss';

export default function Navbar() {
 return (
  <nav id='nav' className='nav navbar'>
   <div className='navbar__menu'>
    <button className='navbar__menu--button'>
     <i class='fa-solid fa-bars'></i>
    </button>
   </div>
   <div className='nav__title navbar__title'>
    <h1 className='nav__title--text navbar__title--text'>Mia Lewis</h1>
   </div>
   <ul className='nav__links'>
    <li>Home</li>
    <li>Work</li>
    <li>About</li>
    <li>Contact</li>
    <li>Resume</li>
    <li>
     <i class='fa-regular fa-envelope nav__icon'></i>
    </li>
    <li>
     <i class='fa-brands fa-linkedin-in nav__icon'></i>
    </li>
   </ul>
  </nav>
 );
}
