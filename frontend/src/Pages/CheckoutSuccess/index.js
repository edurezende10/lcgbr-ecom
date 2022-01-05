import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import DataLayer from '../../Components/DataLayer'
import "./style.css"

const CheckoutSuccess = () => {
    React.useEffect(() => {
        DataLayer.push(
            {
                'event': 'orderPlaced'
            }
        )
    }, [])
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
