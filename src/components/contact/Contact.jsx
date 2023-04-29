import { useRef, useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import './contact.css';

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = evt => {
    evt.preventDefault();
    emailjs
      .sendForm(
        'service_y4n6kcw',
        'template_5lsycmo',
        formRef.current,
        'Zef-3SYhXl2rNj3kp'
      )
      .then(
        result => {
          console.log(result.text);
          setDone(true);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's discuss your project</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={Phone} alt="phone img" className="contact-icon" />
              +34 123 456 789
            </div>
            <div className="contact-info-item">
              <img src={Email} alt="phone img" className="contact-icon" />
              contact@mario.es
            </div>
            <div className="contact-info-item">
              <img src={Address} alt="phone img" className="contact-icon" />
              Plaza España, 25 - 8, Valencia España
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-description">
            <b>What's your story</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && '#333' }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && 'Thank you...'}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
