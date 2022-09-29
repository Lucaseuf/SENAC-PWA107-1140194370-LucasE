import { Link } from "react-router-dom";
import './header.css' 
function Header (){
    return(
        
        <div className="divheader">
            <header>
                <h2 class = "logo">BANCO XUXU</h2>
                    <div>
                        <Link class='linkstyle' to ='/'>Home</Link>&nbsp;&nbsp;&nbsp;
                        <Link class='linkstyle' to ='/cadastro' >Cadastro</Link>&nbsp;&nbsp;&nbsp;
                        <Link class='linkstyle' to ='/movecc' >Conta-corrente</Link>&nbsp;&nbsp;&nbsp;
                        <Link class='linkstyle' to ='/financiamento' >Financiamento</Link>&nbsp;&nbsp;&nbsp;
                        <Link class='linkstyle' to ='/sobrenos' >Sobre Nós</Link>&nbsp;&nbsp;&nbsp;
                    </div>
            </header>
        </div>

        

    )
}
export default Header;