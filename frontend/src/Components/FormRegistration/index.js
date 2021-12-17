import React, { useState } from "react";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";


import './style.css'

const FormRegistration = () => {
    const [cpfCnpj, setCpfCnpj] = useState("");
    const [mask, setMask] = useState("");
    

    return (
        <form className="FormRegistration--container" method="post"  >
            <div className="FormRegistration--container__personalData">
                <div>
                    <label className="FormRegistration--label" for="name">Nome Completo: </label>
                    <input className="FormRegistration--input" type="text" name="name"  />
                </div>
                <div>
                    <label className="FormRegistration--label" for="email">email: </label>
                    <input type="email" name="email"  />
                </div>
                <div>
                    <label className="FormRegistration--label" for="password">Senha: </label>
                    <input type="password" name="password"  />
                </div>
                <div>
                    <label className="FormRegistration--label" for="email">CPF: </label>
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
                    <label className="FormRegistration--label" for="nasc">Data de nascimento: </label>
                    <input type="date" name="nasc"  />
                </div>
            </div>
            <div className="FormRegistration--container__address">
                <div>
                    <label className="FormRegistration--label" for="cep">CEP: </label>
                    <input type="text" name="cep"  />
                </div>
                <div>
                    <label className="FormRegistration--label" for="rua">Rua: </label>
                    <input type="text" name="rua"  />
                </div>
                <div>
                    <label className="FormRegistration--label" for="number">Número: </label>
                    <input type="text" name="number"  />
                </div>
                <div>
                    <label className="FormRegistration--label" for="bairro">Bairro: </label>
                    <input type="text" name="bairro"  />
                </div>
                <div>
                    <label className="FormRegistration--label" for="cidade">Cidade: </label>
                    <input type="text" name="cidade"  />
                </div>
                <div>
                    <label className="FormRegistration--label" for="estado">Estado: </label>
                    <input type="text" name="estado"  />
                </div>
               
            </div>



        </form>

    )
}

export default FormRegistration
