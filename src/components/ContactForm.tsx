import React, { useState } from 'react';
import axios from 'axios';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('/api/contact', {
        name,
        email,
        message,
      });
      alert('Message sent successfully');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error: any) {
      alert('Failed to send message: ' + error.message);
    }
  };

  return (
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
    </form>
  );
};

export default ContactForm;