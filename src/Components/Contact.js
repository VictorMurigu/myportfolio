import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Contact = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])



    const form = useRef();
     const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_me0jvdf', 'template_paacalc', form.current, 'UB6BMhfRS6Ej0HdVN')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
      <section id="contactPage">
          <div className="clients">
              <h2 className="clientsPageTitle">My Clients</h2>
              <p className="clientsDesc">
                  I have opportunities to work with a diverse group of companies.
              </p>
              {loading ? <div>
        <ClipLoader
        color={"#0000FF"}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
              </div> :
       <div className="clientImgs">
                  <img className="clientImg" src="./images/freeCodeCamp2.png" alt="" />
                  <img className="clientImg" src="./images/slacklogo2.png" alt="" />
                  <img className="clientImg" src="./images/jquery1.png" alt="" />
                   <img className="clientImg" src="./images/linkedin2.png" alt=""/>
              </div>
      }
             
          </div>
          <div id="contacts">
              <h1 className="contactTitle ">Contact Me</h1>
              <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
              <form className="contactForm" ref={form} onSubmit={sendEmail}>
                  <input type="text" className="name" placeholder="Your Name" name="your_name" />
                  <input type="email" className="email" placeholder="email@gmail.com" name="your_email" />
                  <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                  <button className="submitBtn" type="submit" value="Send">Submit</button> 
                  <div className="social-links">
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer"><img src="./images/linkedin3.png" alt="" className="link" /></a>
                      <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src="./images/fb1.png" alt="" className="link" /></a>
                      <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src="./images/insta1.jpg" alt="" className="link" /></a>
                      <a href="https://x.com" target="_blank" rel="noreferrer"><img src="./images/x1.png" alt="" className="link"/></a>
                      
                  </div>
              </form>
          </div>
      </section>
  )
}

export default Contact