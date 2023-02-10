import '../css/Footer.css'
// import "../styles/Footer.css";
import fb from "../assites/fb.png";import twit from "../assites/twit.png";import gmail from "../assites/gmail.png";import phone from "../assites/phone.png";
import git from "../assites/git.png";
import React from 'react';
export const Footer=()=>{
    return(
        <React.Fragment  >
        <footer>
        <section id="contact" class="contact-section">
        <div class="contact-section-header">
             <h3>Let's work together...</h3> 
           <p id='how'>How do you take your coffee?</p> 
        </div>
        <div class="contact-links">
             <a href="https://facebook.com/freecodecamp" 
             target="_blank" 
             class="btn contact-details" 
             // eslint-disable-next-line jsx-a11y/alt-text
             rel="noreferrer"><i class="fab fa-facebook-square"></i> <img src={fb} height='30px' ></img>Facebook</a>
            
            <a
            id="profile-link"
            href="https://github.com/freecodecamp"
            target="_blank"
            class="btn contact-details" rel="noreferrer"
            // eslint-disable-next-line jsx-a11y/alt-text
            ><i class="fab fa-github"></i> <img src={git} height='30px'></img>GitHub</a>
            
            <a
            href="https://twitter.com/freecodecamp"
            target="_blank"
            class="btn contact-details" rel="noreferrer"
            // eslint-disable-next-line jsx-a11y/alt-text
            ><i class="fab fa-twitter"></i> <img src={twit} height='30px' ></img> Twitter</a>
            <a href="/cdn-cgi/l/email-protection#a6c3dec7cbd6cac3e6c3dec7cbd6cac388c5c9cb" 
            // eslint-disable-next-line jsx-a11y/alt-text
            class="btn contact-details"><i class="fas fa-at"></i> <img src={gmail}  height='30px'></img>Send a mail</a>
            
            <a href="tel:555-555-5555" class="btn contact-details"
            // eslint-disable-next-line jsx-a11y/alt-text
            ><i class="fas fa-mobile-alt"></i> <img src={phone} height='30px' ></img>Call me</a>
        </div>
        </section>
    </footer>
    </React.Fragment>
    )
}
