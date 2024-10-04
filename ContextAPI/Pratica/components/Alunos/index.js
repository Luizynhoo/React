import Nomes from '../Nomes'

import { useContext } from "react"
import { UserContext } from '../../contexts/user'

export default function Alunos(){

    const { qtdAlunos } = useContext(UserContext);

    return(
        <div>
            <h2>{qtdAlunos} alunos online</h2>
            <Nomes/>
        </div>
    )
}

