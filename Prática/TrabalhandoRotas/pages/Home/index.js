import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem vindo</h1>
      <br/>

      <Link to={"/Sobre"}>Sobre</Link> <br/>
      <Link to={"/Contato"}>Contato</Link>
    </div>
  );
}

export default Home;
