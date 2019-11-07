import React, { Component } from 'react'
import { Link } from 'gatsby'

import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SingleItem from '../components/singleItem'

import '../styles/shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import morgancodes from '../images/morgancodes.jpg'

class Shop extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div id="shop-background">
        <Helmet>
          // TODO: Fill in React Helmet
          <script async src="//www.instagram.com/embed.js"></script>
        </Helmet>
        <Layout>
          <h1 className="shop-header"><Link className="shop-link" to="/">M</Link></h1>
          <div className="outer-container">
            <div className="hidden-shop-banner">SHOP MY SETUP</div>
            <a href="https://www.instagram.com/morgan.codes" className="hidden-instagram-link">@morgan.codes</a>
            <img className="morgancodes-image" src={ morgancodes } alt="morgan.codes" />
            <div className="shop-summary-container">
              <h3 className="shop-banner">SHOP MY SETUP</h3>
              <p className="shop-description">Hi! I'm Morgan. I'm a software developer living in Chicago and document my journey on Instagram.
              I receive a ton of question on my page about my setup, so here's some of my favorite items I use and carry everyday.</p>
              <FontAwesomeIcon icon = { faArrowDown } className="down-arrow"/>
            </div>
          </div> 
          <div className="outer-item-container">
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </div>
        </Layout>
      </div>
    );
  }
}

export default Shop
