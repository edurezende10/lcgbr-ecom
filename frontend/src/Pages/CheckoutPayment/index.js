import React from 'react'

const CheckoutPayment = () => {
    return (
        <div>
            <h2>Escolha a forma de pagamento</h2>

            <div>
                <label>
                    <input type="radio" name="payment-type" value="debito"
                        checked />
                    Cartão de debito
                </label>

                <label>
                    <input type="radio" name="payment-type" value="debito"
                        checked />
                    Cartão de debito
                </label>
            </div>
        </div>
    )
}

export default CheckoutPayment
