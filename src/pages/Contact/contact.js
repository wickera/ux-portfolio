import './contact.scss';

export default function Contact() {
 return (
  <div className='contact'>
   <h4 className='contact__title'>Contact</h4>
   <form className='contact__form'>
    <input type='text' />
    <textarea maxlength='500' minlength='1'></textarea>
    <input type='submit' value='Send' />
   </form>
  </div>
 );
}
