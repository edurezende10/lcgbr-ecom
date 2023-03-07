import React from 'react'
import './style.css'
import DataLayer from '../DataLayer';


const ButtonAddToCart = ({product}) => {
    const addToCart = () => {
        
        if (product.title && product.price) {
            DataLayer.push({
                'ecommerce': {
                    'products': [
                        {
                            item_id: product.id,
                            item_name: product.title,
                            price: product.price
                        }
                    ]
                },
                'event': 'add_to_cart'
            })
        }
    }
    
    return (
        <button onClick={()=>addToCart()} className="Btn-add-to-card" >Add to Cart</button>


    )
}

export default ButtonAddToCart
