import { useState } from "react"
import { useForm } from "react-hook-form"
import useFetch from "../hooks/useFetch"
import axios from "axios"



const Requests = ({state,setState}) => {
    const {register,handleSubmit,reset,getValues}=useForm()
    const url='http://localhost:8080/api/v1'
    const [requests, setRequests] = useState()
    const [request,getAllRequest,createNew, deleteReqId, updateRequest,error]=useFetch(url)

    


    const handleApro=()=>{
        setRequests(true)
    }
    const handleRech=()=>{
        setRequests(false)
    }

   
    const sumit=()=>{
        
        const data={
            description:getValues('description'),
            isApproved:requests,
            elementoId:getValues('elementoId')
            
        }
        createNew('/requests',data)
        setState(!state)  
        
        reset({
            description:'',
            elementoId:''
        })

    }

    

    
  return (
    <div>
        <form onSubmit={handleSubmit(sumit)}>

            <div className='form_section_element'>
                <label className='form_label_element' htmlFor="description">Descripción</label>
                <input className='form_input_element'  {...register('description')} id="description" type="text" />
            </div>
            <div className='form_section_element'>
                <label className='form_label_element' htmlFor="elementoId">Requerimiento</label>
                <input className='form_input_element'  {...register('elementoId')} id="elementoId" type="number" />
            </div>

            
             {error && <p className="error-message">Solicitud ya procesada </p>}


            
            <button onClick={handleApro}>Aprobado</button>
            <button onClick={handleRech}>Rechazado</button>

        </form>
        
        
    </div>
  )
}

export default Requests