import './contact.scss';
import { useRef, useState } from 'react';

export const Contact = () => {
 const [disabled, setDisabled] = useState(false);
 const form = useRef();
 const subject = useRef();
 const text = useRef();
 const submit = useRef();

 const handleClick = (e) => {
  e.preventDefault();

  setTimeout(() => {
   submit.current.value = 'Sent!';
  }, 3000);
  submit.current.value = 'Sending...';

  setDisabled(true);
 };

 return (
  <div className='contact' id='contact' name='contact'>
   <h4 className='contact__title'>Contact</h4>
   <p className='contact__subtitle'>
    I'm currently based in LA in the US, and on the market for full-time
    positions. Let's get in touch!
   </p>
   <form
    ref={form}
    method='post'
    action='https://postmail.invotes.com/send'
    id='email-form'
    className='email_form'>
    <input
     ref={subject}
     disabled={disabled}
     type='text'
     id='subject'
     name='subject'
     placeholder='Subject'
     className='email_form--input'
     autoFocus
    />
    <label>Please include your email and/or phone number.</label>
    <textarea
     ref={text}
     disabled={disabled}
     id='text'
     name='text'
     placeholder='Message'
     className='email_form--input-area'
     rows='5'
     cols='10'
     wrap='soft'
    />
    <input type='hidden' name='access_token' value='bxjsfmyhklu79owj1gnjc9v7' />
    <input
     type='hidden'
     name='success_url'
     value='/contact/Email&Successfully&Sent'
    />
    <input type='hidden' name='error_url' value='/contact' />
    <input
     ref={submit}
     type='submit'
     id='submit-form'
     value='Send'
     className='email_form--submit-btn'
     onClick={handleClick}
    />
   </form>
  </div>
 );
};

export default Contact;
