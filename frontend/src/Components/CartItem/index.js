import React from 'react'

const CartItem = ({product}) => {
    return (
        <div className="ModalCart--content__product">
            <img className="ModalCart--content__image" src={product.image} alt=" " />
            <div className="ModalCart--content__text">
                <p className="ModalCart--content__name">{product.title}</p>
                <p className="ModalCart--content__price">{`R$ ${product.price}`}</p>
            </div>
        </div>
    )
}

export default CartItem
