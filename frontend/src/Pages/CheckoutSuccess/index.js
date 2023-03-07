import React, { useContext } from 'react';
import DataLayer from '../../Components/DataLayer'
import { CartContext } from '../../Components/CartContext';
import{IoMdCheckmarkCircleOutline} from 'react-icons/io'

import "./style.css"

const CheckoutSuccess = () => {
    const [cart] = useContext(CartContext);
    let transaction_id = new Date().getTime()
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0)
    React.useEffect(() => {
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
                  'value':totalPrice,
                  "transaction_id": transaction_id,
                },
                'event': 'purchase'
              })
              
             
  
            }   
  
            
          
          }
          runDataLayer()

    }, [cart, totalPrice,transaction_id])
    return (
        <div className="container-success-Payment">
            <div className="success-Payment--content">
                <IoMdCheckmarkCircleOutline className="success-Payment--icon" />
                <h2>Pagamento Realizado com sucesso</h2>
            </div>
        </div>
    )
}

export default CheckoutSuccess
