import { useState } from "react"
import { useForm } from "react-hook-form"
import useFetch from "../hooks/useFetch"


const Requests = () => {
    const {register,handleSubmit,reset}=useForm()
    const url='http://localhost:8080/api/v1/requests'
    const [requests, setRequests] = useState()
    // const [request,getAllRequest,createNew, deleteReqId, updateRequest]=useFetch()
    const handleApro=()=>{
        setRequests(true)
    }
    const handleRech=()=>{
        setRequests(false)
    }

  return (
    <div>
        <button onClick={handleApro}>Aprobado</button>
        <button onClick={handleRech}>Rechazado</button>
    </div>
  )
}

export default Requests