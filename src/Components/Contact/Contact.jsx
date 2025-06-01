import React, { useState } from "react"
import "./Contact.css"
import loc from "../../assets/gps.png"
import mail from "../../assets/email.png"

const Contact = () => {
   const [, setResult] = useState("");
   
   const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4954e338-ed04-4c19-a4b9-ca7c53ad0389");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

   return (
      <div id="contact" className="contact">
         <div className="contact-title">
            <h1>Get in touch</h1>
         </div>
         <div className="contact-section">
            <div className="contact-left">
               <h1>Let's have a chat</h1>
               <p>If you have any questions or queries, or just want to reach out to me, please leave an email using the form on the right. I hope you have enjoyed reading my personal website. Thanks!</p>
               <div className="contact-details">
                  <div className="contact-detail">
                     <img src={mail} alt="my email" />
                     <p>josht200@live.com</p>
                  </div>
                  <div className="contact-detail">
                     <img src={loc} alt="location" />
                     <p>London, United Kingdom</p>
                  </div>
               </div>
            </div>

            <form onSubmit={onSubmit} className="contact-right">
               <label htmlFor="">Your Name</label>
               <input type="text" placeholder="Enter your name" name="name" />
               <label htmlFor="">Your Email</label>
               <input type="email" placeholder="Enter your email" name="email" />
               <label htmlFor="">Write your message here</label>
               <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
               <button type="submit" className="contact-submit">Send now</button>
            </form>
         </div>
      </div>
   )
}

export default Contact