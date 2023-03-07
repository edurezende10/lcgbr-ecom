import React from 'react'
import './style.css'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import { FaIdCard } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';



const CheckoutPayment = () => {
    const history = useHistory();
const handleClick = ()=>{
    history.push("/checkout/finish/success")
    localStorage.removeItem('cart')
}
    return (
        <div className="container--payment">
            <h2 className="container--payment__title">Escolha a forma de pagamento</h2>
            <div className="container--paymentBox">
                <div className="container--paymentType paymentType">
                    <label>

                        <input type="radio" name="payment-type" value="credito" checked />
                        <FaCcMastercard className="icon-payment-type" />
                        <span>Cartão de credito</span>




                    </label>

                    <label>
                        <input type="radio" name="payment-type" value="debito" />
                        <FaIdCard className="icon-payment-type" />

                        <span>Cartão de debito</span>

                    </label>

                    <label>
                        <input type="radio" name="payment-type" value="boleto" />
                        <FaFileInvoiceDollar className="icon-payment-type" />

                        <span>Boleto</span>
                    </label>
                </div>
                <div className="container--paymentType card-info" >
                    <label>
                        Número do Cartão

                        <input type="text" name="payment-type"
                            checked />

                    </label>
                    <label>
                        Nome descrito no cartão

                        <input type="text" name="payment-type"
                            checked />

                    </label>
                    <label>
                        Vencimento

                        <input type="month" id="start" name="start"
                            min="2018-03" max="2025-12" />

                    </label>
                    <label>
                        Codigo de segurança

                        <input type="text" />

                    </label>

                </div>

            </div>

            <div className="payment-button--container">

                <button className="payment-button" onClick={handleClick}>Finalizar pagamento</button>
            </div>
        </div>
    )
}

export default CheckoutPayment
