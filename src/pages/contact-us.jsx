import React from 'react';
import Layout from '../components/layout-old';

export default () => (
  <>
    <div className="sheet__inner">
      <form name="contact" className="sheet" Netlify>
        <h1 className="sheet__title">Let's get in Touch!</h1>
        <p>
          <label>
            Name <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <input type="text" name="email" />
          </label>
        </p>
        <p>
          <label>
            {' '}
            Message <input type="text" name="message" />
          </label>
        </p>
        <button type="button" className="submit">
          Submit
        </button>
      </form>
    </div>
  </>
);
