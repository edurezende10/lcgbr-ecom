import React, { useState } from "react";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import cep from 'cep-promise'
import DataLayer from "../DataLayer";



import './style.css'

const FormRegistration = () => {
    const [cpfCnpj, setCpfCnpj] = useState("");
    const [mask, setMask] = useState("");

    console.log(mask)

    let getAddress = async (e) => {
        try {
            let result = await cep(e)
            console.log(result)
            return result

        } catch (error) {
            console.log(error)
            alert("cep incorreto")

        }


    }
    React.useEffect(() => {
        DataLayer.push(
            {
                'event': 'initiateCheckout'
            }
        )
    }, [])






    return (

        <form className="FormRegistration--container" method="post"  >
            <div className="FormRegistration--container__personalData">
                <div>
                    <label className="FormRegistration--label" htmlFor="name">Nome Completo: </label>
                    <input className="FormRegistration--input" type="text" name="name" />
                </div>
                <div>
                    <label className="FormRegistration--label" htmlFor="email">email: </label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label className="FormRegistration--label" htmlFor="password">Senha: </label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <label className="FormRegistration--label" htmlFor="email">CPF: </label>
                    <CpfCnpj
                        className="customizedInput"
                        placeholder="Digite um CPF ou CNPJ"
                        type="tel"
                        value={cpfCnpj}
                        onChange={(event, type) => {
                            setCpfCnpj(event.target.value);
                            setMask(type === "CPF");
                        }}
                    />
                </div>
                <div>
                    <label className="FormRegistration--label" htmlFor="nasc">Data de nascimento: </label>
                    <input type="date" name="nasc" />
                </div>
            </div>
            <div className="FormRegistration--container__address">
                <div>
                    <label className="FormRegistration--label" htmlFor="cep">CEP: </label>
                    <input type="text" onBlur={(e) => getAddress(e.target.value)} name="cep" />

                </div>
                <div>
                    <label className="FormRegistration--label" htmlFor="rua">Rua: </label>

                    <input type="text" name="rua" />
                </div>
                <div>
                    <label className="FormRegistration--label" htmlFor="number">Número: </label>
                    <input type="text" name="number" />
                </div>
                <div>
                    <label className="FormRegistration--label" htmlFor="bairro">Bairro: </label>
                    <input type="text" name="bairro" />
                </div>
                <div>
                    <label className="FormRegistration--label" htmlFor="cidade">Cidade: </label>
                    <input type="text" name="cidade" />
                </div>
                <div>
                    <label className="FormRegistration--label" htmlFor="estado">Estado: </label>
                    <input type="text" name="estado" />
                </div>

            </div>



        </form>


    )
}

export default FormRegistration
