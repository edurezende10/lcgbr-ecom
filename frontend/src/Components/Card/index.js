import React from 'react'
import img from './camiseta.jpg'
import ButtonAddToCart from '../ButtonAddToCart'
import './style.css'

function Card({product}) {
    const {image,title,price,id} = product
    return (
        <div className="Card--container">
            <a className="Card--img__link" href={`/product/${id}`}>
                <img className="Card--img" src={image} alt=" " />
            </a>
            <p className="Card--desc">{title}</p>
            <p class-Name="Card--price">{price}</p>
           
            <ButtonAddToCart />
        </div>
    )
}

export default Card
