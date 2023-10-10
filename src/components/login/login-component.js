import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import { LoginStyle } from './styled-login'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { loginUser } from '../../service/client'

// function base64Encode (string) {
//   return Buffer.from(string, 'utf-8').toString('base64')
// }

export const LoginComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handlerClick = async (event) => {
    event.preventDefault()
    const login = { email: email, password: password }
    try {
      console.log(login)
      const response = await loginUser(login)
      console.log(response)
      if (response.status === 200) {
        navigate('/home')
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    }
  }

  // const handlerClick = async (event) => {
  //   event.preventDefault()
  //   // Base64 encode o login e a senha
  //   const base64EncodedLoginPassword = base64Encode(`${login}:${password}`)
  //   // client.get(`/login`).then((response) => {
  //   //   navigate('/home')
  //   //   console.log(response.data)
  //   // })
  //   try {
  //     console.log(login, password)
  //     // Fazer a chamada à API
  //     const response = await axios.get('http://localhost:9000/login', {
  //       headers: {
  //         Authorization: `Basic ${base64EncodedLoginPassword}`
  //       }
  //     })
  //     alert(response.status)
  //     console.log(response.status)

  //     // Se a chamada for bem-sucedida, redirecionar para a tela home
  //     if (response.status === 200) {
  //       console.log(response.status)
  //       navigate('/home')
  //     }
  //   } catch (error) {
  //     // Se a chamada falhar, exibir um alert de erro
  //     console.log(`ERRO ===>>> ${error}`)
  //     alert('Ocorreu um erro ao tentar fazer login.')
  //   }
  // }

  const handlerChangeLogin = (event) => {
    setEmail(event.target.value)
  }

  const handlerChangePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <LoginStyle>
      <div className='loginFormContainer'>
        <form>
          <div className='loginFormChildren'>
            <label htmlFor='login'>Login</label>
            <FontAwesomeIcon icon={faUser} className='icons' />
            <input
              type='text'
              id='login'
              name='username'
              onChange={handlerChangeLogin}
              value={email}
            />

            <label htmlFor='password'>Password</label>
            <FontAwesomeIcon icon={faKey} className='icons' />
            <input
              type='password'
              id='password'
              name='password-user'
              onChange={handlerChangePassword}
              value={password}
            />

            <a href=''>Esqueceu a sua senha?</a>

            <button onClick={handlerClick} type='submit'>Entrar</button>
          </div>
        </form>
      </div>
    </LoginStyle>
  )
}
