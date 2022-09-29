import {useState} from 'react';
import {Link} from "react-router-dom"

function Financiamento(){
    const [entradaValor, setValor] = useState('');
    const [entradaParcelas, setParcelas] = useState('');

    const [dadosUsuarios, setDadosUsuarios] = useState(
        {valorSolicitadoDados:'0,00', valorParcelaDados:'0,00', jurosDados:'0,00'}
    );

    function calcularValor(dados){
        dados.preventDefault();
        var totalParcelas = parseInt(entradaParcelas);
        var solicitacao = parseInt(entradaValor);
        var total = 0;
        var valorJuros = 0;

        if(entradaParcelas === ''){
            totalParcelas = 0;
        } else {
            totalParcelas = parseInt(entradaParcelas);
        }

        if(entradaValor === ''){
            solicitacao = 0;
        } else {
            solicitacao = parseInt(entradaValor);
        }

        if(totalParcelas === 0){
            total = solicitacao;
        } else {
            if(solicitacao > 3000 || totalParcelas >= 11){
                valorJuros = 1.8;
                total = solicitacao * valorJuros;
                total = total /totalParcelas;
            } else {
                total = solicitacao /totalParcelas;
            }
        }
        setDadosUsuarios(
            {valorSolicitadoDados:solicitacao, valorParcelaDados:total, jurosDados:valorJuros}
        );

        setValor('');
        setParcelas('');
    }

    return(
        <div>
            <div align="center">
                <h1>Financiamento</h1> 
            </div>

            <hr/>
            
            <div>
                <form onSubmit={calcularValor} align = 'center'>

                    <label>Valor Solicitado:&nbsp;</label>
                    <input  type="text" placeholder="Informe o valor solicitado..." value={entradaValor} onChange={(evento) => setValor(evento.target.value)}></input>

                    <br/><br/>
                    <label>Parcelas:&nbsp;</label>
                    <input type="text" placeholder="Parcelas desejadas..." value={entradaParcelas} onChange={(evento) => setParcelas(evento.target.value)}></input>
                    <div align="center">
                        <br/><br/>
                        <button type="submit">Calcular</button>
                    </div>
                </form>
            </div>

            <hr/>

            <div align = 'center'>
                <h3 align="center">Valores:</h3>
                <p>Valor solicitado:&nbsp;R$ {dadosUsuarios.valorSolicitadoDados}</p>
                <p>Valor da Parcela ≅&nbsp;R$ {dadosUsuarios.valorParcelaDados} /mês</p>
                <p>Juros:&nbsp;R$ {dadosUsuarios.jurosDados}x</p>
            </div>
        </div>
    );
}
export default Financiamento;