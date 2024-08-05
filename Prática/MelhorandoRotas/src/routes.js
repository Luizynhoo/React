//Intalação da biblioteca react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Error from './pages/Error'
import Produto from './pages/Produto'

import Header from './components/header'

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/Sobre' element={ <Sobre/> }/>
                <Route path='/Contato' element={ <Contato/> }/>
                <Route path='/Produto/:id' element={ <Produto/> }/>

                <Route path='*' element={ <Error/> }/> 
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;