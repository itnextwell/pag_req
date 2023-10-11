import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/Elements.css'
import useAuth from '../hooks/useAuth'


const Elements = ({ createNew,updateInfo,updateElment }) => {
 
  const {register, handleSubmit, reset }=useForm()
  const url='http://localhost:8080/api/v1/users'
   const{userIdA,getAllUser}=useAuth()


  

 useEffect(()=>{
  reset(updateInfo)
  getAllUser(url)
  
 },[updateInfo])

 //console.log(userIdA)


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

      <form className='form_element' onSubmit={handleSubmit(submit)}>
        

      <div className='form_section_element'>
        <label className='form_label_element' htmlFor="description">Descripción</label>
        <input className='form_input_element'  {...register('description')} id="description" type="text" />
      </div>
      <div className='form_section_element'>
        <label className='form_label_element' htmlFor="amount">Cantidad</label>
        <input className='form_input_element' {...register('amount')} id="amount" type="number" />
      </div>
      <div className='form_section_element'>
        <label className='form_label_element' htmlFor="justification">Justificación</label>
        <input className='form_input_element' {...register('justification')} id="justification" type="text" />
      </div>
      <div className='form_section_element'> 
        <label className='form_label_element' htmlFor="responsible">Responsable</label>
        {/* <input className='form_input_element' {...register('responsible')} id="responsible" type="text" /> */}
        <select className='form_input_element' {...register('responsible')} id="responsible">
          <option value="">Selecione un responsable</option>
          {
            userIdA?.map((userAll)=>(
              <option key={userAll.id} value={`${userAll.name} ${userAll.lastName}`} >{userAll.name} {userAll.lastName}</option>

            ))
          }
         
          
        </select>
      </div>
      <div className='form_section_element'>
        <label className='form_label_element' htmlFor="supplier">Proveedor</label>
        <input className='form_input_element' {...register('supplier')} id="supplier" type="text" />
      </div>
      <div className='form_section_element'>
        <label className='form_label_element' htmlFor="priotiry">Prioridad</label>
        <input className='form_input_element' {...register('priority')} id="priotiry" type="text" />
      </div>
      <button className='form_btn_element'>Enviar </button>
      

    </form>
  )
}

export default Elements