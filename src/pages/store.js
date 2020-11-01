import React from 'react';
import Layout from '../components/Layout/layout'

const Store = () => {
  return (
    <Layout page={'store'} className="sheet">
      <div className="sheet__centered">
        <div className="sheet__body">
          <h1>Online shopping is coming soon</h1>
          <h2>In the meantime feel free to use the Contact form to get in touch and purchase an item.</h2>
        </div>
      </div>
    </Layout>
  )
}

export default Store;