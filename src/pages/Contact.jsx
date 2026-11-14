import React, { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import bannerPhoto from '../assets/photos/juventus-fans.jpg';
import '../styles/Contact.css';

// the topics a visitor can pick in the form
const topics = ['General question', 'Wrong score or fact', 'Suggest a club', 'Website problem'];

// an empty form, used at the start and after sending
const emptyForm = { name: '', email: '', topic: topics[0], message: '' };

const Contact = () => {
  // HOOK: what is typed in the form right now
  const [form, setForm] = useState(emptyForm);
  // HOOK: the messages already sent, saved in localStorage
  const [messages, setMessages] = useLocalStorage('messages', []);
  // HOOK: the line shown under the button (an error or a thank-you)
  const [notice, setNotice] = useState('');

  // start at the top of the page when it opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // one function for every field: the input's "name" says which key to change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading

    if (!form.name || !form.email || !form.message) {
      setNotice('Please fill in your name, email and message.');
      return;
    }

    // add the new message to the start of the list (spread copies the old ones)
    const newMessage = { id: Date.now(), date: new Date().toLocaleDateString('en-GB'), ...form };
    setMessages([newMessage, ...messages]);
    setForm(emptyForm); // clear the form
    setNotice('Thank you, ' + form.name + '. Your message has been saved.');
  };

  // keep every message except the one with this id
  const deleteMessage = (id) => {
    setMessages(messages.filter((m) => m.id !== id));
  };

  return (
    <div className="contact">
      {/* ---------- banner ---------- */}
      <div className="contact-banner" style={{ backgroundImage: `url(${bannerPhoto})` }}>
        <div className="container">
          <h1 className="display"> Contact </h1>
          <p> Spotted a wrong score, want another club covered, or found a bug? Write to us. </p>
        </div>
      </div>

      <div className="contact-columns container">
        {/* ---------- left: information ---------- */}
        <div className="contact-info">
          <h2 className="section-title display"> Talk to the team </h2>
          <p>
            Football Hub is made by two computer science students. We read every message and
            use them to fix mistakes and decide what to add next.
          </p>

          <div className="contact-facts">
            <div>
              <span> Reply time </span>
              <b> Within two days </b>
            </div>
            <div>
              <span> Corrections </span>
              <b> Fixed in the next update </b>
            </div>
            <div>
              <span> Clubs covered </span>
              <b> Real Madrid, Barcelona, Bayern, Juventus </b>
            </div>
          </div>
        </div>

        {/* ---------- right: the form ---------- */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="name"> Name </label>
              <input id="name" name="name" type="text" placeholder="Your name"
                value={form.name} onChange={handleChange} />
            </div>

            <div className="field">
              <label htmlFor="email"> Email </label>
              <input id="email" name="email" type="email" placeholder="you@example.com"
                value={form.email} onChange={handleChange} />
            </div>
          </div>

          <div className="field">
            <label htmlFor="topic"> Topic </label>
            <select id="topic" name="topic" value={form.topic} onChange={handleChange}>
              {topics.map((topic) => (
                <option key={topic} value={topic}> {topic} </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="message"> Message </label>
            <textarea id="message" name="message" rows="6" placeholder="Write your message"
              value={form.message} onChange={handleChange}></textarea>
          </div>

          <div className="form-bottom">
            <button type="submit" className="btn"> Send message </button>
            {notice && <p className="form-notice"> {notice} </p>}
          </div>
        </form>
      </div>

      {/* ---------- messages saved in localStorage ---------- */}
      <div className="sent container">
        <h2 className="section-title display"> Your messages ({messages.length}) </h2>

        {messages.length === 0 && <p className="sent-empty"> Messages you send are listed here. </p>}

        {messages.map((m) => (
          <div className="sent-item" key={m.id}>
            <div className="sent-top">
              <span> {m.topic} · {m.date} </span>
              <button onClick={() => deleteMessage(m.id)}> Delete </button>
            </div>
            <h3> {m.name} <small> {m.email} </small> </h3>
            <p> {m.message} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
