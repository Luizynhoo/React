import { useRef } from 'react'
import './App.css'
import { Header } from './components/Header';
import { Button } from "./components/Button";


function App() {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const userRef = useRef(null)
  const descriptionRef = useRef(null)

  function handleSave(e) {
    e.preventDefault();

    console.log({
      name: nameRef.current?.value,
      name: emailRef.current?.value,
      name: userRef.current?.value,
      name: descriptionRef.current?.value,
    })
  }


  return (
    <div className="container">
      <h1>React</h1>
      <Header />

      <form className="form" onSubmit={handleSave}>

        <input
          type="text"
          placeholder="Digite seu nome..."
          className="input"
          ref={nameRef}
        />

        <input
          type="text"
          placeholder="Digite seu email..."
          className="input"
          ref={emailRef}
        />

        <input
          type="text"
          placeholder="Digite seu username..."
          className="input"
          ref={userRef}
        />

        <textarea
          type="text"
          placeholder="Digite sua descriçao..."
          className="input"
          ref={descriptionRef}
        ></textarea>


        <Button type="submit" onClick={handleSave}>
          Enviar
        </Button>
      </form>
    </div>
  )
}

export default App
