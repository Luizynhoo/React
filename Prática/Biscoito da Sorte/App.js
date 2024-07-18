import React, { Component } from "react";
import Botao from "./components/botao";
import './style.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      frases: ''
    };

    this.frases = ['Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'];
      
      this.quebraBiscoito =  this.quebraBiscoito.bind(this)
    }

    quebraBiscoito(){
      let state = this.state;
      let aleatorio = Math.floor(Math.random() * this.frases.length);
      state.frases = '"' + this.frases[aleatorio] + '"';
      this.setState(state);
    }


  render() {
    return (
      <div className="container">
        <img src={require('./assets/biscoito.png')} alt="Biscoito da sorte" className="img"></img>
        <Botao acaoBtn={this.quebraBiscoito} nome="Abrir Biscoito"/>
        <h3 className="frases">{this.state.frases}</h3>
      </div>
    );
  }
}



export default App;