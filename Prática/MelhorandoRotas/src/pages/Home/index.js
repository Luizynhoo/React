import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem vindo</h1>
      <br/>

      <Link to={"/Sobre"}>Sobre</Link> <br/>
      <Link to={"/Contato"}>Contato</Link>

      <hr/> <br/>

      <Link to={"/Produto/123"}>Chinelo Havainas</Link>
    </div>
  );
}

export default Home;
