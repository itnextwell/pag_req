import axios from "axios"
import getConfigAuth from "../utils/getConfigAuth"
import { useState } from "react"


const useAuth = () => {
  const [userIdA, setUserIdA] = useState()
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
        console.log(res.data)})
    .catch(err=>console.log(err))

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


  return {userIdA,createUser,loginUser,getUserId}
}

export default useAuth