import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formState);
    // Optionally, reset form fields
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label htmlFor="name">Your Name</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label htmlFor="email">Your Email</label>
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            placeholder=" "
          ></textarea>
          <label htmlFor="message">Your Message</label>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
