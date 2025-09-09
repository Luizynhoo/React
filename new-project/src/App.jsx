import './app.css';
import { useActionState } from "react"

function App() {

  async function handleSubmite(prevState, formData) {

    await new Promise((resolve) => setTimeout(() => resolve(), 2500))

    const nome = formData.get("nome")

    console.log(prevState);

    //começando a usar o ternário
    return nome.length < 4
      ? { text: "Nome inválido" }
      : { text: `Bem vindo ${nome}` }
  }

  //função sempre acima do hook
  const [message, formAction, pending] = useActionState(handleSubmite, { text: "Se cadastre.." })

  return (
    <div>
      <h1>useActionState</h1>

      <form action={formAction}>

        <input
          type="text"
          placeholder="Digite o seu nome"
          name="nome"
          required
        />

        <button type="submit" disabled={pending}>
          {pending ? "Cadastrando.." : "Cadastrar"}
        </button>

      </form>

      {message && <h1>{message.text}</h1>}

    </div>

  )
}

export default App
