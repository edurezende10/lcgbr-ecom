
import './style.css'
import { Basket } from './../Basket/index';
import CartItem from './../CartItem/index'
import {AiOutlineClose} from 'react-icons/ai/index';





const ModalCart = ({ cart, hideModal }) => {

    return (
        <div className="ModalCart">
            <div className="ModalCart--container">
                <button className="ModalCart--btn__container" onClick={() => hideModal()} >
                    <AiOutlineClose className="ModalCart--btn__close"/>
                </button>
                <h2 className="ModalCart--title" >Carrinho</h2>
                <div className="ModalCart--content">
                    <div className="ModalCart--content__container">
                        {
                            cart.map((product) => {
                                return (
                                    <CartItem product={product} />
                                )
                            })
                        }
                    </div>
                    <div className="ModalCart--content__total">
                        <div >
                            <div className="container-basket">

                            <Basket /> 
                            </div>
                            <div className="ModalCart--content__btn">
                                <a href="/" onClick={() => hideModal()}  className="btn-light">Continuar comprando</a>
                                <a href="/cart" className="btn-accent">Finalizar compra</a>

                            </div>

                        </div>


                    </div>

                </div>


            </div>

        </div>
    )
}

export default ModalCart
