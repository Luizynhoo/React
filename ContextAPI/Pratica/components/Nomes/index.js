import { useContext } from "react"
import { UserContext } from "../../contexts/user"

export default function Nomes(){
    //Exemplo do uso do ContextAPI, fazendo a state se tornar global 
    const { alunos, setAlunos } = useContext(UserContext);

    return(
        <div>
            <span style={{ color: '#ff0000' }}>Seja bem vindo: { alunos }</span>
            <br/> <br/>
            <button onClick={() => setAlunos ('Arthur')}>Trocar Nome</button>
        </div>
    )
}