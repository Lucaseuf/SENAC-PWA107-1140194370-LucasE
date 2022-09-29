import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home/home.js';
import Cadastro from './Pages/Cadastro/cadastro.js';
import Financiamento from './Pages/Financiamento/financiamento.js';
import MoveCc from './Pages/MoveCc/movecc.js';
import SobreNos from './Pages/SobreNos/sobrenos.js';
import Header from './Pages/header/Header.js';

function RouterApp(){
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/financiamento' element={<Financiamento/>}/>
                <Route path='/movecc' element={<MoveCc/>}/>
                <Route path='/sobrenos' element={<SobreNos/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RouterApp;