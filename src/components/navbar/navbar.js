import './navbar.css';

export default function Navbar() {
 return (
  <nav id='nav' className='nav'>
   <div className='left-nav'>
    <h1 className='nav__title'>Mia Lewis</h1>
   </div>
   <ul className='right-nav'>
    <li>Home</li>
    <li>Work</li>
    <li>About</li>
    <li>Resume</li>
    <li>Email</li>
    <li>Linkedin</li>
   </ul>
  </nav>
 );
}
