import Alunos from "./components/Alunos";
import { useState } from "react";

import UserProvider from "./contexts/user";

function App() {
  const [nomeAluno, setNomeAluno] = useState("Felipe");

  return (
    //Todos dentro desse componente se torna um children
    <UserProvider>
      <div className="App">
        <h1>Faculdade</h1>
        <hr />
        <Alunos/>
      </div>
    </UserProvider>
  );
}

export default App;
