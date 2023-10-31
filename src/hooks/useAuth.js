import axios from "axios"
import getConfigAuth from "../utils/getConfigAuth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const useAuth = () => {
  const [userIdA, setUserIdA] = useState()
  const [error, setError] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

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
        setIsAuthenticated(true)
        console.log("aca en login")
        
        console.log(res.data)})
    .catch(err=>{
      console.log(err)
      setError("Verifique Error")
      setIsAuthenticated(false)
      console.log('ingrese al false')
    
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
//agregado 
//all user 
const getAllUser=(url,data)=>{
  axios.get(url,getConfigAuth())
  .then(res=>{
  setUserIdA(res.data)
  //console.log(res.data)
  })
  .catch(err=>console.log(err))
}


  return {userIdA,createUser,loginUser,getUserId,getAllUser,error,isAuthenticated}
}

export default useAuth