import React from 'react'
import FormRegistration from '../../Components/FormRegistration/index'
import {IoBagCheckOutline} from 'react-icons/io5/index'
import { useHistory } from 'react-router-dom';

import './style.css'

const CheckoutIndex = () => {
    const history = useHistory();

   
    return (
        <div className="title-checkoutData">
            <h2>
                <IoBagCheckOutline className="icon-checkout" />
                Cadastre-se
            </h2>
            <FormRegistration/>
            <button onClick={()=>history.push("/checkout/payment")}>Seguir para Pagamento</button>
        </div>
    )
}

export default CheckoutIndex
