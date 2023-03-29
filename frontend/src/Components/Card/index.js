import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { toast } from 'react-toastify';
import DataLayer from '../DataLayer';


import './style.css'

function Card(props) {
    const { images, title, price, id } = props.product
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const item = { images, title, price, id };
        setCart(currentState => [...currentState, item]);
        toast.success('Produto Adicionado ao carrinho', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,

            draggable: true,
            progress: undefined,
        });
        console.log(cart)

        DataLayer.push(
            {
                'ecommerce': {
                    'products': [
                        {
                            id: id,
                            name: title,
                            price: price
                        }
                    ]
                },
                'event':'addToCart'
            }
        );



    }
    return (
        <div className="Card--container">
            <a className="Card--img__link" href={`/product/${id}`}>
                <img className="Card--img" src={images[0]} alt=" " />
            </a>
            <p className="Card--desc">{title}</p>
            <p className="Card--price">{price}</p>
            <button onClick={addToCart}>Add to cart</button>
            


        </div>
    )
}

export default Card
