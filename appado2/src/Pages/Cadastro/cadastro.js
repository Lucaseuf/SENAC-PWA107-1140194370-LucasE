import { useState } from "react";
import {Link} from "react-router-dom"

function Cadastro(){
    
    const [entradaNome, setEntradaNome] = useState('');
    const [entradaEmail, setEntradaEmail] = useState('');
    const [entradaCPF, setEntradaCPF] = useState('');

    const [dadosUsuario, setDadosUsuario] = useState(
        {nomeDados:'Vazio', emailDados:'Vazio', cpfDados:'Vazio'}
    );

function registrarUsuario(dados){
    dados.preventDefault();

    setDadosUsuario(
        {nomeDados:entradaNome, emailDados:entradaEmail, cpfDados:entradaCPF}
    );

    setEntradaNome('');
    setEntradaEmail('');
    setEntradaCPF('');
}

    return(
        <div>
            <div>
                <h1 align = 'center'>Cadastro</h1>
                <p align = 'center'>Digite seus dados</p>
            </div>

            <div>
                <form onSubmit={registrarUsuario} align = 'center'>
                    <br/>
                    <label>Nome:&nbsp;</label>
                    <input type = 'text' placeholder="Digite seu nome" value={entradaNome} onChange = {(lembronao) => setEntradaNome(lembronao.target.value)}></input>
                    
                    <br/>
                    <label>Email:&nbsp;</label>
                    <input type = 'text' placeholder="Digite seu Email" value={entradaEmail} onChange = {(lembronao) => setEntradaEmail(lembronao.target.value)}></input>

                    <br/>
                    <label> CPF:&nbsp;</label>
                    <input type = 'text' placeholder="Digite seu CPF" value={entradaCPF} onChange = {(lembronao) => setEntradaCPF(lembronao.target.value)}></input>

                    <br/><br/>
                    <button type = 'submit'>registrar</button>
                </form>
            </div>

            <div>
                <br/><hr/>
                <h2 align = 'center'>Dados Informados:</h2>
                <p align = 'center'>Nome: {dadosUsuario.nomeDados}</p>
                <p align = 'center'>Email: {dadosUsuario.emailDados}</p>
                <p align = 'center'>CPF: {dadosUsuario.cpfDados}</p>
            </div>
        </div>

    )
}
export default Cadastro;