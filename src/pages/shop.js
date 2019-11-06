import React, { Component } from 'react'
import { Link } from 'gatsby'

import Helmet from 'react-helmet'
import Layout from '../components/layout'
import '../styles/shop.css'

class Shop extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div id="shop-background">
        <Helmet>
          // TODO: Fill in React Helmet
        </Helmet>
        <Layout>
          <h1 className="shop-header"><Link className="shop-link" to="/">M</Link></h1>
        </Layout>
      </div>
    );
  }
}

export default Shop
