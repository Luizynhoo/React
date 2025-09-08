import "./app.css";

//Uma maneira melhor de criar um formulário
import { useState } from "react";
import { NewUser } from './Transition'
import { ButtonSubmit } from "./Button";

function App() {

  const [message, setMessage] = useState("")

  //formData é chamado pelo action do form
  async function handleRegister(formData) {

    //Fake dalay
    await new Promise(resolve => setTimeout(resolve, 2500))

    const nome = formData.get("nome")
    const tarefa = formData.get("tarefa")

    console.log(nome)
    console.log(tarefa)

    //Exibindo os componentes na tela
    setMessage("Bem vindo, " + nome + ", sua próxima tarefa será : " + tarefa)
  }

  return (
    <div className="forms-container">
      <h1>Form + Action</h1>

      <form action={handleRegister}>
        <input
          type="text"
          name="nome"
          placeholder="Digite o seu nome"
          required
        />

        <input
          type="text"
          name="tarefa"
          placeholder="Digite qual será a sua proxima tarefa"
          required
        />

        <ButtonSubmit/>
      </form>

      {/* Mensagem na tela  */}
      <h2>{message}</h2>

      <NewUser/>
    </div>
  )
}

export default App
