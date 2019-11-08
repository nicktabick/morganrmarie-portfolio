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
            <SingleItem 
              title="VIVO Desk" 
              price="$189.99"
              imageSource="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B074P7QCYH&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=morgancodes-20" 
              imageLink="https://www.amazon.com/gp/product/B074P7QCYH/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B074P7QCYH&linkCode=as2&tag=morgancodes-20&linkId=342299734eb80aff6d7a9cc759985b53"/>
            <SingleItem 
              title="Clean Code by Robert Martin"
              price="$37.49"
              imageSource="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0132350882&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=morgancodes-20" 
              imageLink="https://www.amazon.com/gp/product/0132350882/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0132350882&linkCode=as2&tag=morgancodes-20&linkId=c4a394acada03984508c487f58ac4efc"/>
            <SingleItem 
              title="Logitech MX Master 3"
              price="$180.00"
              imageSource="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07S395RWD&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=morgancodes-20" 
              imageLink="https://www.amazon.com/gp/product/B074P7QCYH/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B074P7QCYH&linkCode=as2&tag=morgancodes-20&linkId=342299734eb80aff6d7a9cc759985b53"/>
            <SingleItem 
              title="Ridiculous Stress Swan-Thing"
              price="$180.00"
              imageSource="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B074P7QCYH&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=morgancodes-20" 
              imageLink="https://www.amazon.com/gp/product/B074P7QCYH/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B074P7QCYH&linkCode=as2&tag=morgancodes-20&linkId=342299734eb80aff6d7a9cc759985b53"/>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Shop
