import './footer.scss';
import resume from '../../assets/files/Mia2022Resume.pdf';

export default function Footer() {
 return (
  <footer id='footer' className='footer'>
   <div className='footer__container'>
    <ul className='footer__links'>
     <li>
      <a href={resume} alt='Download Mia"s Resume' download>
       <i className='fa-regular fa-envelope footer__icon'></i>
      </a>
     </li>
     <li>
      <a
       href='https://linkedin.com/in/mia-lewis'
       replace
       target='_blank'
       rel='noopener noreferrer'>
       <i className='fa-brands fa-linkedin-in footer__icon'></i>
      </a>
     </li>
    </ul>
   </div>
   <div className='footer__credit'>
    <p>&copy; 2023 by Mia Lewis. Proudly created by Eric.</p>
   </div>
  </footer>
 );
}
