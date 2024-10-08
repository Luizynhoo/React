//Intalação da biblioteca react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/Sobre' element={ <Sobre/> }/>
                <Route path='/Contato' element={ <Contato/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;