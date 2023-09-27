import axios from "axios"
import getConfigAuth from "../utils/getConfigAuth"
import { useState } from "react"


const useAuth = () => {
  const [userIdA, setUserIdA] = useState()
  const [error, setError] = useState()

  const timer = setTimeout(() => {
    setError(); // Oculta el mensaje de error después de 3 segundos (ajusta el tiempo según tus necesidades)
  }, 3000); // 3000 milisegundos = 3 segundos
  
  //Register
  const createUser=(url,data)=>{
    axios.post(url,data)
    .then(res=>{
    
    console.log(res.data)
    })
    .catch(err=>console.log(err))
  }
  //login
  const loginUser=(url,data)=>{
    axios.post(url,data)
    .then(res=>{
        //guarda la información en el local storage
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("user",JSON.stringify(res.data.user))
        setError()
        console.log(res.data)})
    .catch(err=>{
      console.log(err)
      setError("Verifique Error")
    
    })

  }
// user
const getUserId=(url,id)=>{
  axios.get(`${url}/${id}`,getConfigAuth())

  .then(res=>{
    setUserIdA(res.data)
    // console.log(res.data)
  })

  .catch(err=>console.log(err))

}


  return {userIdA,createUser,loginUser,getUserId,error}
}

export default useAuth