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
      <form className="form_r" onSubmit={handleSubmit(sumit)}>
      <div className="form_section">
        <label className="form_label" htmlFor="name">Nombre</label>
        <input {...register('name')} id="name" type="text" />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="lastName">Apellido</label>
        <input  className="form_input" {...register('lastName')} id="lastName" type="text" />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="mail">Email</label>
        <input className="form_input" {...register('mail')} id="mail" type="email" />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="phone">Celular</label>
        <input  className="form_input"{...register('phone')} id="phone" type="number" />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="post">Cargo</label>
        <input className="form_input" {...register('post')} id="post" type="text" />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="identification">Identificación</label>
        <input className="form_input" {...register('identification')} id="identification" type="text" />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="password">Contraseña</label>
        <input className="form_input" {...register('password')} id="password" type="text" />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="rol">Rol</label>
        <input className="form_input" {...register('rol')} id="rol" type="text" />
      </div>
      <button className="form_btn">enviar</button>
      </form>
      
    </div>
  )
}

export default Register