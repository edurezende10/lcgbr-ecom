import React from 'react'
import './style.css'

const ButtonAddToCart = () => {
    const addToCart = ()=>{
        console.log('clicked')
    }
    return (
        <button onClick={addToCart} className="Btn-add-to-card" href="http://">Add to Cart</button>
            
        
    )
}

export default ButtonAddToCart
