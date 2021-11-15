import React from 'react'
import img from './camiseta.jpg'
import ButtonAddToCart from '../ButtonAddToCart'
import './style.css'

function Card() {
    return (
        <div className="Card--container">
            <img className="Card--img" src={img} alt="" />
            <p className="Card--desc">Camiseta 705</p>
            <p className="Card--price">R$ 100</p>
            <a className="Card--add" href="http://">Add to Cart</a>
            <ButtonAddToCart />
        </div>  
    )
}

export default Card
