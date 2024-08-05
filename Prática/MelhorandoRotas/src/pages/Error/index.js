import { Link } from 'react-router-dom'

function Error(){
    return (
        <div>
            <h2>Opss.. essa página não existe</h2><br/>

            <span>Encontramos essas páginas aqui:</span> <br/>
            <Link to={"/"}>Home</Link><br/>
            <Link to={"/Sobre"}>Sobre</Link><br/>
            <Link to={"/Contato"}>Contato</Link><br/>
        </div>
    )
}

export default Error