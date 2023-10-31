import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useFetch from '../hooks/useFetch'
import useAuth from '../hooks/useAuth'
import './styles/Login.css'
import { useNavigate } from 'react-router-dom'

const Login = ({setIsLogget}) => {
  const {register, reset, handleSubmit}=useForm()
  const [localUser, setLocalUser] = useState(false)
  
 const navigate=useNavigate()

  const {loginUser,error,isAuthenticated}=useAuth()
  const url='http://localhost:8080/api/v1/users/login'
 

    
  
  const submit=data=>{
    

    loginUser(url,data)
   
   
   reset({
    mail:'',
    password:''
  })
  const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
  
       
    
  }

  
 
  useEffect(()=>{

    
    
    console.log(isAuthenticated)
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
   
    if (token) {
      console.log("aca estoy iniciando")
      setIsLogget(true)
      navigate("/")
    } else {
      setIsLogget(false)
      console.log(isAuthenticated)
      console.log("estoy en falso")
      
    }
      
    
    
  },[isAuthenticated])
  
  const handleLogin =  () => {
    setLocalUser(!localUser)
    
    
    console.log("ingrese al handle")
    console.log(isAuthenticated)
    
    
  }
  

 
  // const handleLogout=()=>{
  //   setIsLogget(false)
  //   localStorage.clear()
  // }
  return (
    <div className={`container_login `}>
       
      <form className='form_log' onSubmit={handleSubmit(submit)}>
      <div className='form_section_login'>
        <label  className='form_label_login' htmlFor="mail">Email</label>
        <input className='form_input_login' {...register('mail')} id="mail" type="email" />
      </div>
      <div className='form_section_login'>
        <label className='form_label_login' htmlFor="password">Contraseña</label>
        <input className='form_input_login' {...register('password')} id="password" type="password" />
      </div> 
      {error && <p className="error-login">Incorrecto, 'Ingrese nuevamente las credenciales' </p>}    
      <button className='form_btn_login' onClick={handleLogin} variant="primary" type="submit">Login</button>
      {/* <button className='form_btn_login' onClick={handleLogout}>Logout</button> */}
      </form>
     
      


    </div>
  )
}

export default Login