import React, { useContext } from 'react';
import { FaOpencart } from 'react-icons/fa'
import './styles.css'
import { CartContext } from '../../Components/CartContext';
import CartItem from '../../Components/CartItem'
import { Basket } from '../../Components/Basket'
import DataLayer from '../../Components/DataLayer';



const ResumeCart = () => {
    const [cart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc,curr)=> acc+curr.price,0)

    React.useEffect(()=>{
        const runDataLayer = ()=>{
          let productsCart=[]
          cart.forEach(function(item){                
            productsCart.push({
                item_id: item.id,
                item_name: item.title,
                price: item.price,
            })
        })
          if(cart !== undefined  ){
            DataLayer.push({
              'ecommerce': {
                'products':productsCart,
                'currency':'BRL',
                'value':totalPrice
              },
              'event': 'view_cart'
            })
            
           

          }
         

          
        
        }
        runDataLayer()
        
      },[cart,totalPrice])
    return (
        <>
            <div className="resumeCart">
                <div className="Title-resume__container">
                    <FaOpencart className="Title-resume-icon" />
                    <h2 className="Title-resume">Meu carrinho</h2>
                </div>
                <div className="resumeCart-container">
                    <div className="resumeCart--containerItems">
                        {
                            cart.map((cart) => {
                                return (
                                    <CartItem product={cart} />
                                )
                            })
                        }
                    </div>
                    <aside className="resumeCart--total">
                        <div className="resumeCart--total__container" >
                            <h4>Resumo</h4>

                        </div>
                        <div className="resumeCart--container__btn">
                            <div className="container-basket">
                                <Basket />
                            </div>
                            <div className="resumeCart--btn">
                                <a href="/" className="resumeCart--btn-light">Continuar comprando</a>
                                <a href="/checkout/index/" className="resumeCart--btn-accent">Finalizar compra</a>
                            </div>
                        </div>
                    </aside>
                </div>

            </div>

        </>
    )
}

export default ResumeCart
