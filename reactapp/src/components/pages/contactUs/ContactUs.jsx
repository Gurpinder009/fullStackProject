import React, { useState } from 'react';
import './contactUs.css';
import axios from 'axios';

const ContactUs = () => {

  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [subject,setSubject]=useState()
  const [message,setMessage]=useState()


 
  const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:5000/contact',{name,email,subject,message})
      .then(result=>
        {console.log(result)
          alert('submitted')
      })
      .catch(err=>
        console.log(err)
      )
  }
  return (
    
    <div className="contact-form-container">
       
       <h2>Contact Us</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20854.262632189628!2d-122.91370298436149!3d49.204679219158585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d871f5ee4dc9%3A0xf3a710065f3a2f3f!2sDouglas%20College%2C%20New%20Westminster%20Campus!5e0!3m2!1sen!2sca!4v1721777191183!5m2!1sen!2sca"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Enter the subject" onChange={(e)=>setSubject(e.target.value)}required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Enter your message" onChange={(e)=>setMessage(e.target.value)}required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
