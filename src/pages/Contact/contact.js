import './contact.scss';
import miaabout from '../../assets/images/miaabout.jpg';

export const Contact = () => {
 return (
  <div className='contact' id='contact' name='contact'>
   <div className='contact__image'>
    <img
     alt='Mia smiling with arms crossed'
     src={miaabout}
     className='contact__image--img'
    />
   </div>
   <div className='contact__form'>
    <h4 className='contact__title'>Contact</h4>
    <p className='contact__subtitle'>
     I'm currently based in LA in the US, and on the market for full-time
     positions. Let's get in touch!
    </p>
    <form
     method='post'
     action='https://postmail.invotes.com/send'
     id='email-form'
     className='email_form'>
     <input
      type='text'
      id='subject'
      name='subject'
      placeholder='Subject'
      className='email_form--input'
      autoFocus
     />
     <label>Please include your email and/or phone number.</label>
     <textarea
      id='text'
      name='text'
      placeholder='Message'
      className='email_form--input-area'
      rows='5'
      cols='10'
      wrap='soft'
     />
     <input
      type='hidden'
      name='access_token'
      value='bxjsfmyhklu79owj1gnjc9v7'
     />
     <input
      type='hidden'
      name='success_url'
      value='/contact/Email&Successfully&Sent'
     />
     <input type='hidden' name='error_url' value='/contact' />
     <input
      type='submit'
      id='submit-form'
      value='Send'
      className='email_form--submit-btn'
     />
    </form>
   </div>
  </div>
 );
};

export default Contact;
