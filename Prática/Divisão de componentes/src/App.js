import React, { Component } from "react";
//Importando o componente Membro
import Membro from "./componentes/Membro";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Membro nome="Visitante"/>
      </div>
    );
  }
}

export default App