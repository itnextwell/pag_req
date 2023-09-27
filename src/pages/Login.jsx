import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useFetch from '../hooks/useFetch'
import useAuth from '../hooks/useAuth'
import './styles/Login.css'

const Login = ({setIsLogget}) => {
  const {register, reset, handleSubmit}=useForm()
  const [localUser, setLocalUser] = useState()
  
 

  const {loginUser,error}=useAuth()

  const submit=data=>{
    const url='http://localhost:8080/api/v1/users/login'
   loginUser(url,data)
   
   reset({
    mail:'',
    password:''
  })
  const user = localStorage.getItem("user");
    
    
  }
 
  useEffect(()=>{

    setLocalUser(localStorage.getItem("token"))

  },[localUser])
  

  const handleLogin=()=>{
    const user = localStorage.getItem("user");
    
    
    if(localUser){
      setIsLogget(true)
      
    }else {
      setIsLogget(false)
    }
    
  }
  const handleLogout=()=>{
    setIsLogget(false)
    localStorage.clear()
  }
  return (
    <div className={`container_login `}>
       
      <form className='form_log' onSubmit={handleSubmit(submit)}>
      <div className='form_section_login'>
        <label  className='form_label_login' htmlFor="mail">Email</label>
        <input className='form_input_login' {...register('mail')} id="mail" type="email" />
      </div>
      <div className='form_section_login'>
        <label className='form_label_login' htmlFor="password">Contraseña</label>
        <input className='form_input_login' {...register('password')} id="password" type="text" />
      </div> 
      {error && <p className="error-login">Incorrecto, 'Ingrese nuevamente las credenciales' </p>}    
      <button className='form_btn_login' onClick={handleLogin}>Login</button>
      <button className='form_btn_login' onClick={handleLogout}>Logout</button>
      </form>
     
      


    </div>
  )
}

export default Login