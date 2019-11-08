import React, { Component } from 'react'
import { Link } from 'gatsby'

import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SingleItem from '../components/singleItem'

import '../styles/shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import morgancodes from '../images/morgancodes.jpg'

class Shop extends Component {
  render() {
    return (
      <div id="shop-background">
        <Helmet>
          <title>Shop Morgan.Codes Setup</title>
        </Helmet>
        <Layout>
          <h1 className="shop-header"><Link className="shop-link" to="/">M</Link></h1>
          <div className="outer-container">
            <div className="hidden-shop-banner">SHOP MY SETUP</div>
            <a href="https://www.instagram.com/morgan.codes" rel="noopener noreferrer" target="_blank" className="hidden-instagram-link">@morgan.codes</a>
            <img className="morgancodes-image" src={ morgancodes } alt="morgan.codes" />
            <div className="shop-summary-container">
              <h3 className="shop-banner">SHOP MY SETUP</h3>
              <p className="shop-description">Hi! I'm Morgan. I'm a software developer living in Chicago and document my journey on <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/morgan.codes" className="shop-insta-link">Instagram</a>.
              I receive a ton of question on my page about my setup, so here's some of my favorite items I use and carry everyday.</p>
              <FontAwesomeIcon icon = { faArrowDown } className="down-arrow"/>
            </div>
          </div> 
          <div className="outer-item-container">
            <SingleItem 
              title="VIVO Desk Frame" 
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
              price="$99.99"
              imageSource="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07S395RWD&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=morgancodes-20" 
              imageLink="https://www.amazon.com/gp/product/B07S395RWD/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07S395RWD&linkCode=as2&tag=morgancodes-20&linkId=37d08497ea42b9af6141483c538235bd"/>
            <SingleItem 
              title="VIVO Dual Monitor Desk Mount"
              price="$31.99"
              imageSource="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B009S750LA&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=morgancodes-20" 
              imageLink="https://www.amazon.com/gp/product/B009S750LA/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B009S750LA&linkCode=as2&tag=morgancodes-20&linkId=30afe869a475e656b4cb086bd94b2854"/>
            <SingleItem 
              title="VIVO Desk Top" 
              price="$99.99"
              imageSource="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07V1JCXRS&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=morgancodes-20" 
              imageLink="https://www.amazon.com/gp/product/B07V1JCXRS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07V1JCXRS&linkCode=as2&tag=morgancodes-20&linkId=316bd59fa3240514a79b0860d7a55f59"/>
            <SingleItem 
              title="Dev Stickers" 
              price="$7.99"
              imageSource="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07JYWTGWF&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=morgancodes-20" 
              imageLink="https://www.amazon.com/gp/product/B07JYWTGWF/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07JYWTGWF&linkCode=as2&tag=morgancodes-20&linkId=4cb4aba3ac39a91f1b96eb7819115dd9"/>
            <SingleItem 
              title="Samsung 28&quot; Monitor" 
              price="$189.99"
              imageSource="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07FBNPTDD&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=morgancodes-20" 
              imageLink="https://www.amazon.com/gp/product/B07FBNPTDD/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07FBNPTDD&linkCode=as2&tag=morgancodes-20&linkId=c619285d06536007ed2bfc7a2523f083"/>
            <SingleItem 
              title="Logitech MX Keys" 
              price="$99.99"
              imageSource="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07S92QBCJ&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=morgancodes-20" 
              imageLink="https://www.amazon.com/gp/product/B07S92QBCJ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07S92QBCJ&linkCode=as2&tag=morgancodes-20&linkId=bc0e77317e9a3cd4dfc66a5d781774f3"/>
            <SingleItem 
              title="JS and JQuery by Jon Duckett" 
              price="$25.95"
              imageSource="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1118531647&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=morgancodes-20" 
              imageLink="https://www.amazon.com/gp/product/1118531647/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1118531647&linkCode=as2&tag=morgancodes-20&linkId=289acdd1e7808a77fce50baef349496e"/>
            <SingleItem 
              title="ISM Backpack" 
              price="$235.00"
              imageSource="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07FB46SVC&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=morgancodes-20" 
              imageLink="https://www.amazon.com/gp/product/B07FB46SVC/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07FB46SVC&linkCode=as2&tag=morgancodes-20&linkId=91342d540df6c89ab96dd3a5e4c81c14"/>
            <SingleItem 
              title="Hydro Flask" 
              price="$35.95"
              imageSource="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01GW2G92W&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=morgancodes-20" 
              imageLink="https://www.amazon.com/gp/product/B01GW2G92W/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01GW2G92W&linkCode=as2&tag=morgancodes-20&linkId=7f5e6256c663c862ea4b421c919ce122"/>
          </div>
          <div className="shop-footer">
            <p className="shop-footer-text">Thanks for checking out the shop! I'm extremely passionate about my setup and the products I use everyday. My must-haves
              would have to be the <a target="_black"rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B07S92QBCJ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07S92QBCJ&linkCode=as2&tag=morgancodes-20&linkId=bc0e77317e9a3cd4dfc66a5d781774f3">Logitech MX Keys</a>&nbsp; 
              and the <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B07S395RWD/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07S395RWD&linkCode=as2&tag=morgancodes-20&linkId=37d08497ea42b9af6141483c538235bd">MX Master 3</a>. My&nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B074P7QCYH/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B074P7QCYH&linkCode=as2&tag=morgancodes-20&linkId=342299734eb80aff6d7a9cc759985b53">VIVO standing desk</a>&nbsp;is amazing, and 
              the&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B009S750LA/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B009S750LA&linkCode=as2&tag=morgancodes-20&linkId=30afe869a475e656b4cb086bd94b2854">monitor stand</a> pairs very well with
              the desk. The books are must-haves, whether you're a beginner or a pro. 
              <br></br><br></br>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/morgan.codes">Follow me on IG</a> to stay updated with the setup 👽💞
            </p>
          </div>
          <div className="shop-bottom-links">
            <a href="https://www.linkedin.com/in/morganrmarie"><FontAwesomeIcon icon = { faLinkedin } className = "shop-social-icon" /></a>
            <a href="https://www.github.com/morganrmarie"><FontAwesomeIcon icon = { faGithub } className = "shop-social-icon" /></a>
            <a href="https://www.instagram.com/morgan.codes"><FontAwesomeIcon icon = { faInstagram } className = "shop-social-icon" /></a>
            <a href="mailto:morganrmarie@gmail.com?subject=Morgan.Codes Inquiry"><FontAwesomeIcon icon = { faEnvelopeSquare } className = "shop-social-icon" /></a>
            <br></br>
            <a className="shop-closing" href="https://www.morgancodes.co">morgancodes.co</a>
        </div>
        </Layout>
      </div>
    );
  }
}

export default Shop
