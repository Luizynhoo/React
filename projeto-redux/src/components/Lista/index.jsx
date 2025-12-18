import { useDispatch } from 'react-redux'
import { fetchUsers } from '../../redux/user/slice'

import styles from './lista.module.css'

export default function Lista() {
    const dispatch = useDispatch();

    function handleFetchUsers() {
        dispatch(fetchUsers());
    }

    return (
        <>
            <h2 className={styles.title}>Lista de Usuá<span>rios Cadastrados</span></h2>

            <button 
                onClick={handleFetchUsers}
                className={styles.fetchButton}
            >
                Buscar Usuários
            </button>
        </>
    )
}
