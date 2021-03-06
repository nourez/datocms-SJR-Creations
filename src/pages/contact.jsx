import React from 'react';
import Layout from '../components/Layout/layout'

const Contact = () => (
  <Layout page={'contact'} className="sheet">
    <div className="sheet">
      <h1 className="sheet__title">Let's get in touch!</h1>
      <div className="sheet__body">
        <p>Send me an email and I'll get back to you as soon as possible</p>
        <form name="contact-us" className="sheet__form" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact-us" />
          <p className="full-width">
            <label htmlFor="name" className="sheet__form__label">Name </label>
            <input id="name" name="Name" className="sheet__form__input" type="text"/>
          </p>

          <p>
            <label htmlFor="email" className="sheet__form__label">Email</label>
            <input id="email" name="Email" className="sheet__form__input" type="email"/>
          </p>

          <p>
            <label htmlFor="phone" className="sheet__form__label">Phone</label>
            <input id="phone" name="Phone Number" className="sheet__form__input" type="tel"/>
          </p>

          <p className="full-width">
            <label htmlFor="topic" className="sheet__form__label">Topic</label>
            <input id="topic" name="Topic" className="sheet__form__input" type="text"/>
          </p>

          <p className="full-width">
            <label htmlFor="message" className="sheet__form__label message-box">Message</label>
            <textarea id="message" name="Message" cols="40" rows="7"/>
          </p>

          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  </Layout>
);

export default Contact;