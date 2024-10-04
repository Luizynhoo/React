import {useState, createContext} from 'react'

export const UserContext = createContext({});

export default function UserProvider({children}){

    const [alunos, setAlunos] = useState('Luiz')
    const [qtdAlunos, setQtdAlunos] = useState(20)
    return(
        //Passando as propriedades para o UserContext para passar em todas as pages
        <UserContext.Provider value={{ alunos, setAlunos, qtdAlunos }}>
            {children}
        </UserContext.Provider>
    )
}