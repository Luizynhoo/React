import { useState, useEffect } from 'react'; 
import styles from './login.module.css'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../../redux/user/slice'

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, error } = useSelector(state => state.user);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleLogin(e){
    e.preventDefault()

    if(name === '' || email === ''){
      alert('Preencha todos os campos!')
      return;
    }

    dispatch(createUser({
      name,
      email,
    }))
  }

  useEffect(() => {
    if (user) {
      navigate('/painel')
      setName('')
      setEmail('')
    }

    if (error) {
      alert(error)
    }
  }, [user, error, navigate])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link to="/painel">
          <h1 className={styles.title}>
            Dev<span>Login</span>
          </h1>
        </Link>

        <form onSubmit={handleLogin} className={styles.form}>
          <input 
            type="text" 
            className={styles.input}
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Digite seu nome....'
          />

          <input 
            type="text" 
            className={styles.input}
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Digite seu email...'
          />

          <button type="submit">Acessar</button>
        </form>
      </main>
    </div>
  )
}
