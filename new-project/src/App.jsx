import { useState } from 'react';
import './App.css'
import { Header } from './components/Header';



function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <div className="container">
      <Header name={name} />

      <p>Name:</p>
      <input
        type="text"
        placeholder='Digite o seu nome'
        onChange={(e) => setName(e.target.value)}
      />

      <p>Email:</p>
      <input
        type="text"
        placeholder='Digite o seu email'
        onChange={(e) => setEmail(e.target.value)}
      />

    </div>
  )
}

export default App
