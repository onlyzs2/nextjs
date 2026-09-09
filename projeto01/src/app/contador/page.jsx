"use client"
import { useState } from "react";

export default function Contador(){
    
    const [contador, setContador] = useState(0);
    
    function addUmContador(){
        if(contador < 100){
            setContador(contador + 1)
        }else{
            alert("o Contador nao pode passar de 100")
        }
    }
    function rmUmContador(){
        if (contador > -5){
            setContador(contador - 1);
        }else{
            alert("o Contador nao pode passar de -5");
        }
    }
    
    return(
        <>
            <h1> Desenvolvendo um contador </h1>
            <p> valor: <b>{contador}</b></p>
            <div>
                <button type="button" onClick={addUmContador}> + </button>
                <button type="button" onClick={rmUmContador}> - </button>
            </div>
        </>
    )
}