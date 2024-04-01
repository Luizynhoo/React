//Criando o Componente Membro
import React, { Component } from "react";

class Membro extends Component {
    //Utilizar State para poder alterar o valor da props
    constructor(props) {
        super(props);
        this.state = {
            nome: props.nome
        };
        this.entrar = this.entrar.bind(this);
        // this.sair = this.sair.bind(this)
    }

    //Criando a função para o botão
    entrar(){
        this.setState ({nome: 'Luiz'})
    }

    render() {
        return (
            <div>
                <h2>Bem vindo (a) {this.state.nome}</h2>
                <button onClick={this.entrar}>
                    Entrar
                </button>
                {/* Criando função do botão diretamente nele */}
                <button onClick={() => this.setState({nome: 'Visitante'})}>
                    Sair
                </button>
            </div>
        );
    }
}
//Exportando todo esse componente
export default Membro;
