import React, { Component } from "react";
import './style.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      numero: 0,
      go: 'GO'
    };

    this.timer = null;
    this.go = this.go.bind(this);
    this.limpar= this.limpar.bind(this);
    }

    go(){
      let state = this.state;
      if(this.timer !== null){
        clearInterval(this.timer)
        this.timer = null
        state.go = 'GO'
      } else {
        this.timer = setInterval(()=>{
          state.numero += 0.1;
          this.setState(state)
        },100)
        state.go = 'PAUSAR'
      }

      this.setState(state)
    }

    limpar(){
      let state =  this.state;

      if(this.timer !== null){
        clearInterval(this.timer)
        this.timer = null
      }

      state.numero = 0;
      state.go = 'GO';

      this.setState(state)
    }



  render() {
    return (
      <div className="container">
        <img src={require('./assets/cronometro.png')} className="img"></img>
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="btns">
          <a className="go" onClick={this.go}>{this.state.go}</a>
          <a className="limpar" onClick={this.limpar}>LIMPAR</a>
        </div>
      </div>
    );
  }
}



export default App;