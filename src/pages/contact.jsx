import React from 'react';
import Layout from '../components/Layout/layout'

const Contact = () => (
  <Layout page={'contact'} className="sheet">
    <div className="sheet">
      <h1 className="sheet__title">Let's get in touch!</h1>
      <div className="sheet__body">
        <p>Send me an email and I'll get back to you as soon as possible</p>
        <form className="sheet__form"Netlify>
          <p className="full-width">
            <label htmlFor="name" className="sheet__form__label">Name </label>
            <input id="name" className="sheet__form__input" type="text" />
          </p>

          <p>
            <label htmlFor="email" className="sheet__form__label">Email</label>
            <input id="email" className="sheet__form__input" type="text"/>
          </p>

          <p>
            <label htmlFor="phone" className="sheet__form__label">Phone</label>
            <input id="phone" className="sheet__form__input" type="text"/>
          </p>

          <p class="full-width">
            <label htmlFor="topic" className="sheet__form__label">Topic</label>
            <input id="topic" className="sheet__form__input" type="text"/>
          </p>

          <p className="full-width">
            <label htmlFor="message" className="sheet__form__label message-box">Message</label>
            <textarea id="message" cols="40" rows="7" />
          </p>

          <button>Submit</button>
        </form>
      </div>
    </div>
  </Layout>
);

export default Contact;