import { useForm } from "react-hook-form"
import useFetch from "../hooks/useFetch"
import useAuth from "../hooks/useAuth"


const Register = () => {
  const {register,handleSubmit,reset}=useForm()
  const url='http://localhost:8080/api/v1/users'
  
  const {createUser}=useAuth()
  const sumit=(data)=>{
    createUser(url,data)
    console.log(data)
    reset({
      name:'',
      lastName:'',
      mail:'',
      phone:'',
      post:'',
      identification:'',
      password:''
    })
  }
  
  return (
    <div>
      <form  onSubmit={handleSubmit(sumit)}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input {...register('name')} id="name" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Apellido</label>
        <input {...register('lastName')} id="lastName" type="text" />
      </div>
      <div>
        <label htmlFor="mail">Email</label>
        <input {...register('mail')} id="mail" type="email" />
      </div>
      <div>
        <label htmlFor="phone">Celular</label>
        <input {...register('phone')} id="phone" type="number" />
      </div>
      <div>
        <label htmlFor="post">Cargo</label>
        <input {...register('post')} id="post" type="text" />
      </div>
      <div>
        <label htmlFor="identification">Identificación</label>
        <input {...register('identification')} id="identification" type="text" />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input {...register('password')} id="password" type="text" />
      </div>
      <button>enviar</button>
      </form>
      
    </div>
  )
}

export default Register