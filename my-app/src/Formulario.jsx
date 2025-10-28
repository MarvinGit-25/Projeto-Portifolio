import React from "react";
import { useState } from "react";
function Form(){
    const [nome, SetNome] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [assunto, setAssunto] = useState("")

    function MudarValorInput(e){
      e.preventDefault()
      SetNome(e.target.value)  
    }

    function submit(e){
      e.preventDefault()
      if (nome === "" || email === '' || number === "" || assunto === "" ) {
        alert("preencha os campos")
        return
      }
        alert("tudo certo")
    }
  

    

    return(
        <form onSubmit={submit}>
                  <div className="input-box">
                    <input type="text" placeholder="nome completo" onChange={MudarValorInput} value={nome}></input> 
                    <input type="email" placeholder="e-mail" onChange={e => setEmail(e.target.value)} value={email}/>
                  </div>
        
                  <div className="input-box">
                    <input type="number" placeholder="numero de telefone" onChange={e => setNumber(e.target.value)} value={number}/>
                    <input type="text" placeholder="assunto" onChange={e => setAssunto(e.target.value)} value={assunto}/>
                  </div>
        
                  <textarea cols="30" rows="10" placeholder="mensagem"></textarea>
                  <button className="btnForm">Enviar</button>
                </form>
    )
}

export default Form