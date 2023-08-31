import axios from "axios"
import { useState } from "react"

const useFetch = () => {
  const [element, setElement] = useState()

  const url='http://localhost:8080/api/v1'

  const getAllElement=()=>{
    axios.get(`${url}/elementos`)

    .then(res=>setElement(res.data))

    .catch(err=>console.log(err))

  }

  const createNew=(data)=>{
    axios.post(`${url}/elementos`,data)
    .then(res=>setElement([...element,res.data]))
    .catch(err=>console.log(err))
  }

  const deleteElement=(id)=>{
    axios.delete(`${url}/elemento/${id}`)
    .then(res=>setElement(res.data))
    .catch(err=>console.log(err))
  }


  return[element,getAllElement,createNew, deleteElement]
}

export default useFetch