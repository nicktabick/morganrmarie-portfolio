import React from 'react'
import { Link } from 'gatsby'

import Helmet from 'react-helmet'
import Layout from '../components/layout'
import '../styles/single-item.css'

const SingleItem = (props) => {
    return (
        <div className="item-container">
            <a href={ props.imageLink }>
                <img src={ props.imageSource } className="item-image"></img>
            </a>
            <a href={ props.imageLink }>
                <p class="item-title">{ props.title }</p>
            </a>
            <p className="item-price">{props.price}</p>
        </div>
    );
}
  
  export default SingleItem