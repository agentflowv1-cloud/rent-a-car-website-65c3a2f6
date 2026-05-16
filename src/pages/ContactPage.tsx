import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !email || !message) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('/api/contact', {
        name,
        email,
        message,
      });
      setSuccess('Message sent successfully');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error: any) {
      setError('Failed to send message: ' + error.message);
    }
  };

  return (
    <div className="contact-container">
      <h1>Get in touch with us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </label>
        <button type="submit">Send Message</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </form>
    </div>
  );
};

export default ContactPage;