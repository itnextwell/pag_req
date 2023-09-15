import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/Elements.css'


const Elements = ({ createNew,updateInfo,updateElment }) => {
  const {register, handleSubmit, reset }=useForm()

 useEffect(()=>{
  reset(updateInfo)
 },[updateInfo])



const submit=(data)=>{
  if(updateInfo){
    //si tiene información update
    updateElment('/elementos',updateInfo.id,data)

  }else{
    //create
    createNew('/elementos',data)
  }
  
  reset({
    description:'',
    amount:'',
    justification:'',
    responsible:'',
    supplier:'',
    priority:''
  })
}


  return (

      <form onSubmit={handleSubmit(submit)}>
        

      <div>
        <label htmlFor="description">Descripción</label>
        <input {...register('description')} id="description" type="text" />
      </div>
      <div>
        <label htmlFor="amount">Cantidad</label>
        <input {...register('amount')} id="amount" type="number" />
      </div>
      <div>
        <label htmlFor="justification">Justificación</label>
        <input {...register('justification')} id="justification" type="text" />
      </div>
      <div>
        <label htmlFor="responsible">Responsable</label>
        <input {...register('responsible')} id="responsible" type="text" />
      </div>
      <div>
        <label htmlFor="supplier">Proveedor</label>
        <input {...register('supplier')} id="supplier" type="text" />
      </div>
      <div>
        <label htmlFor="priotiry">Prioridad</label>
        <input {...register('priority')} id="priotiry" type="text" />
      </div>
      <button>Enviar </button>
      

    </form>
  )
}

export default Elements