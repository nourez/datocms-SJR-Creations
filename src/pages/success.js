import React from 'react';
import Layout from '../components/Layout/layout'
import { Link } from 'gatsby';

const Success = () => (
  <Layout page={'contact'} className="sheet">
    <div className="sheet">
      <h1 className="sheet__title">Success!</h1>
      <Link to="contact">Go Back</Link>
    </div>
  </Layout>
);

export default Success;