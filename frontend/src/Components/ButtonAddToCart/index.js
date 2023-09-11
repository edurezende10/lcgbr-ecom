import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './style.css';
import { toast } from 'react-toastify';
import DataLayer from '../DataLayer';


const ButtonAddToCart = ({product}) => {
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        
        setCart(currentState => [...currentState, product]);
        toast.success('Produto Adicionado ao carrinho', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,

            draggable: true,
            progress: undefined,
        });
        
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
