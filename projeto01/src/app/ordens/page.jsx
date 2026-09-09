"use client";
import { useState } from "react";
import "./ordens.css"

export default function Ordens(){
    const[ordens, setOrdens] = useState([]);

    // vamos aos campos do formulario
    const [cliente, setCliente] = useState("");
    const [equipamento, setEquipamento] = useState("");
    const [descricao, setDescricao] = useState("");
    const [status, setStatus] = useState("");


    // vamos criar uma variavel para exibir os erros de preenchimento
    const [erro,setErro] = useState("");

    function cadastrarOrdem(event){
        event.preventDefault();

        // validar entradas
        if(
            cliente.trim() == "" || equipamento.trim() == "" || descricao.trim() == ""
        ){
            setErro("Preencha todos os campos!");
            return; // isso faz com que a função pare
        }
        if(descricao.length < 15){
            setErro("Abaixo do limite minimo de 15 caracteres")
            return;
        }
        if(descricao.length > 100){
            setErro("Acima do limite maximo de 100 caracteres")
            return;
        }
        //vamos unir os campos em um unico objeto
        const novaOrdem = {
            id: Date.now(),
            cliente: cliente.trim(),
            equipamento: equipamento.trim(),
            descricao: descricao.trim(),
            status: status.trim()
        }
        
        //vamos adicionar na lista de ordens
        setOrdens([...ordens, novaOrdem]);
        //depois de adicionar vamos limpar os campos
        setCliente("");
        setEquipamento("");
        setDescricao("");
        setStatus("");
        setErro("");
    }

    console.log(ordens)

    return(

        <main>
            
            <h1>Ordens de serviço</h1>

            <form onSubmit={cadastrarOrdem}>
            
                <div>
            
                    <label htmlFor="cliente">Cliente: </label>
                    <textarea
                        id="cliente"
                        value={cliente}
                        placeholder="Nome do cliente"
                        onChange={(event)=> setCliente(event.target.value)}
                    />
            
                    <label htmlFor="equipamento">Equipamento: </label>
                    <textarea
                        id="equipamento"
                        value={equipamento}
                        placeholder="Nome do equipamento"
                        onChange={(event)=> setEquipamento(event.target.value)}
                    />
            
                    <label htmlFor="descricao">Descricao: </label>
                    <textarea
                        id="descricao"
                        value={descricao}
                        placeholder="descricao"
                        onChange={(event)=> setDescricao(event.target.value)}
                    />

                    <label htmlFor="status">status</label>
                    <select
                        id="status"
                        value={status}
                        placeholder="status da ordem"
                        onChange={(event)=> setStatus(event.target.value)}
                    >
                        <option>Fechada</option>
                        <option>Aberta</option>
                    </select>
                    
            
                </div> 
            
            {erro != "" && <p>{erro}</p>}

            <button type="submit">Cadastrar</button>
                    </form>

            <table className="tabela">
                <thead>
                    <tr>
                        <th>
                            Cliente
                        </th>
                        <th>
                            Equipamento
                        </th>
                        <th>
                            Descrição
                        </th>
                        <th>
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ordens.map((ordem) => (
                        <tr key="">
                        <td>{ordem.cliente}</td>
                        <td>{ordem.equipamento}</td>
                        <td>{ordem.descricao}</td>
                        <td>{ordem.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </main>

    )

}