import './footer.scss';

export default function Footer() {
 return (
  <footer className='footer'>
   <div className='footer__container'>
    <ul className='footer__links'>
     <li>
      <i className='fa-regular fa-envelope footer__icon'></i>
     </li>
     <li>
      <i className='fa-brands fa-linkedin-in footer__icon'></i>
     </li>
    </ul>
   </div>
   <div className='footer__credit'>
    <p>&copy; 2023 by Mia Lewis. Proudly created by Eric.</p>
   </div>
  </footer>
 );
}
