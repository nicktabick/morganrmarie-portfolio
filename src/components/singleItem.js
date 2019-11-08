import React from 'react'
import '../styles/single-item.css'

const SingleItem = (props) => {
    return (
        <div className="item-container">
            <a target="_blank" rel="noopener noreferrer" href={ props.imageLink }>
                <img src={ props.imageSource } className="item-image" alt="product"></img>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={ props.imageLink }>
                <p class="item-title">{ props.title }</p>
            </a>
            <p className="item-price">{props.price}</p>
        </div>
    );
}
  
  export default SingleItem