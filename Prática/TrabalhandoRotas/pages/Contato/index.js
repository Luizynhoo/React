import { Link } from "react-router-dom";

function Contato() {
  return (
    <div>
      <h1>Entre em contato:</h1>
      <span>email</span>
      <br/>
      <Link to={"/"}>Página Inicial</Link>
    </div>
  );
}

export default Contato;
