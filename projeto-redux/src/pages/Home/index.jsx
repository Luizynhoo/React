import styles from './home.module.css'
import { Header } from '../../components/header'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

export function Home() {

  const { user } = useSelector((rootReducer) => rootReducer.user)

  console.log(user);

  function handleDeleteAddress() {
    alert("Endereço deletado com sucesso!")
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Login
          </Link>
          <Link to="/painel" className={styles.link}>
            Painel
          </Link>
          <Link to="/address" className={styles.link}>
            Meus endereços
          </Link>
        </nav>

        <main className={styles.content}>
          <div className={styles.message}>
            <h1 className={styles.title}>
              Olá {user ? user.name : "Visitante"}, bem vindo!
            </h1>

            <span>{user ? user.email : "Nenhum e-mail registrado"}</span>


            {user && user.address ? (
              <div className={styles.address}>
                <h2>Seu endereço:</h2>
                <span>
                  {user.address.location}, nº {user.address.number}
                </span>
                <button
                  className={styles.deleteButton}
                  onClick={handleDeleteAddress}
                >
                  Deletar endereço
                </button>
              </div>
            ) : (
              <div className={styles.noAddress}>
                <h2>Você não possui um endereço cadastrado.</h2>
                <Link to="/address" className={styles.addButton}>
                  Adicionar endereço
                </Link>
              </div>
            )
            }


          </div>

        </main>
      </div>
    </>
  )
}
