import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {ImWhatsapp} from 'react-icons/im'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'



function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_etw172j', 'template_a6d2m5s', form.current, 'JGh0pbar-Rxu9H_R4') 
      e.target.reset()
  };

  return (
    <section id='Contact'>
      <h5>Get intouch</h5>
      <h2>Contact Me</h2>
      <div className=' container contact__container'>
        <div className="contact__options">
        <article className='contact__option'>
          <HiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>njoyaalexander71@gmail.com</h5>
          <a href="mailto:njoyaalexander71@gmail.com"> Send me a massage </a>

        </article>
        <article className='contact__option'>
        <BiMessageRoundedDetail className='contact__option-icon'/>
          <h4>Messager</h4>
          <h5>alexayogen</h5>
          <a href="https://m.mealex.njoya" > Send me a massage </a>

        </article> 
         <article className='contact__option'>
          <ImWhatsapp className='contact__option-icon'/>
          <h4>Whatssap</h4>
          <h5>+233240027151</h5>
          <a href="https://api.whatssap.com/send?phone+233240027151" target='blank'> Send me a massage </a>
        </article>
        </div>
        
        {/*END OF CANTACT OPTIONS */}
      
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Enter your full Name ' required />
        <input type="email" placeholder='Your email' required />
        <textarea name="message" rows='7' placeholder='your message' required ></textarea>
        <button type='submit' className='btn btn-primary '>Send Message</button>
      </form>
      
      </div>
    </section>
  )
}

export default Contact