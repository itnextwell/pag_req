import React from 'react'
import { useForm } from 'react-hook-form'
import useFetch from '../hooks/useFetch'
import useAuth from '../hooks/useAuth'

const Login = ({setIsLogget}) => {
  const {register, reset, handleSubmit}=useForm()
  

  const {loginUser}=useAuth()

  const submit=data=>{
    const url='http://localhost:8080/api/v1/users/login'
   loginUser(url,data)
   reset({
    mail:'',
    password:''
  })
  }

  const handleLogin=()=>{
    setIsLogget(true)
  }
  const handleLogout=()=>{
    setIsLogget(false)
    localStorage.clear()
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="mail">Email</label>
        <input {...register('mail')} id="mail" type="email" />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input {...register('password')} id="password" type="text" />
      </div>     
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      </form>
      


    </div>
  )
}

export default Login