import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, fetchUsersById } from '../../redux/user/slice'
import { useState } from 'react'

import styles from './lista.module.css'

export default function Lista() {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.user);

    const [userId, setUserId] = useState("");

    function handleFetchUsers() {
        dispatch(fetchUsers());
    }

    function handleFetchUserID() {
        if (!userId) return;
        dispatch(fetchUsersById(Number(userId)));
    }

    return (
        <>
            <h2 className={styles.title}>Lista de Usuá<span>rios Cadastrados</span></h2>



            <div className={styles.searchArea}>
                <button
                    onClick={handleFetchUsers}
                    className={styles.fetchButton}
                >
                    Buscar Usuários
                </button>

                <div className={styles.searchById}>
                    <input
                        type="number"
                        placeholder="ID do usuário"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className={styles.searchInput}
                    />

                    <button
                        onClick={handleFetchUserID}
                        className={styles.fetchButton}
                    >
                        Buscar Usuário ID
                    </button>
                </div>
            </div>


            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {loading && (
                        <tr>
                            <td colSpan={3}>
                                <strong>Carregando usuários...</strong>
                            </td>
                        </tr>
                    )}

                    {error && (
                        <tr>
                            <td colSpan={3} className={styles.error}>
                                Erro ao buscar usuários
                            </td>
                        </tr>
                    )}

                    {!loading && !error && users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}