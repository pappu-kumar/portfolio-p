import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import medium from './../../assets/tw.png';

const Contact = () => {
    return (  
        <div className="section-container">
            <Header 
               heading="Get in touch."
               details="Interested to colaborate feel free to drop me email!"
            />

            {/* Form section of contact details */}
             <div className="contact-form-contain">
                 <form action="" className="contact-form" 
                    action="https://formspree.io/f/mjvjlkyb"
                    method="POST"
                    >
                     {/* email id input */}
                     <input 
                        type="email"
                        placeholder="your email id"
                        name="_replyto"
                        className="input-box email-input" />

                        {/* email body */}
                        <textarea 
                            type="text"
                            placeholder="your message"
                            name="message"
                            className="input-box body-input">
                         </textarea>
                        
                        {/* submit button */}
                        <button type="submit" className="contact-btn">
                            send email
                        </button>
                 </form>
             </div>

            {/* social icons containers */}
            <div className="social-icon-container">
                <a href="https://github.com/pappu-kumar" className="social-icon">
                    <img src={github} alt="social" />
                </a>
                <a href="https://instagram.com/pappukumarsaw1?utm_medium=copy_link" className="social-icon">
                    <img src={instagram} alt="social" />
                </a>
                <a href="https://www.linkedin.com/in/pappu-kumar-16a45a199/" className="social-icon">
                    <img src={linkedin} alt="social" />
                </a>
                <a href="https://twitter.com/pappu_dhananjay?s=08" className="social-icon">
                    <img src={medium} alt="social" />
                </a>
            </div>

            <FooterLink phrase="Read more " toAdress="/about" link="about me" />

            <div className="vector-frame">
                <img src={contactVector} alt="vector" className="about-vactor" />
            </div>
        </div>
    );
}
 
export default Contact;
