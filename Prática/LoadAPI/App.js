import React, { useEffect, useState } from "react";
import './style.css'

//https://sujeitoprogramador.com/rn-api/?api=posts

//Criando a state
function App() {
  const [nutri, setNutri] = useState ([])

//Toda vez ativar a função que está dentro
useEffect (() => {

//Fazendo load da api 
  function loadAPI(){
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
    //Usando fetch para fazer a requisição da API
    fetch(url)
    //Usando .then() para caso de sucesso, transformando a resposta em JSON
    .then((r)=> r.json())
    //Trazendo todo resultado para esse then
    .then((json)=>{
      console.log(json)
      setNutri(json);
    })
  };

  loadAPI();
}, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item)=>{
        return(
          <article key={item.id}  className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa"></img>
            <p className="subtitulo">
              {item.subtitulo}
            </p>

            <a className="btn">Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;
