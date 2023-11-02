import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css';
import {HotTable, HotColumn} from "@handsontable/react";
import {registerAllModules} from "handsontable/registry";
//libreia que traduce lenguaje a  esMX es español
import { registerLanguageDictionary,esMX } from 'handsontable/i18n';

import useAuth from '../hooks/useAuth';
import { useFieldArray, useForm } from 'react-hook-form';

import React, { useEffect, useState} from 'react';
import useFetch from '../hooks/useFetch';

//ejecutar para obtener todas las funciones de handsontable

registerAllModules()
//activa el lenguaje
registerLanguageDictionary(esMX)

const Tabla = ({updateInfo}) => {
    const urlb='http://localhost:8080/api/v1'
    const [ elements,getAllElement,createNew, deleteElemById, updateElment]=useFetch(urlb)
    const {register,control, handleSubmit, reset }=useForm()
  const url='http://localhost:8080/api/v1/users'
   const{userIdA,getAllUser}=useAuth()
   const [data, setData] = useState([{}]);
   const { fields, append, remove } = useFieldArray({
    control,
    name: 'items', // Nombre del campo en el formulario
  });


<Handsontable
  data={data}
  columns={[
    { data: 'description', title: 'Descripción' },
    { data: 'amount', title: 'Cantidad' },
    { data: 'justification', title: 'Justificación' },
    { data: 'responsible', title: 'Responsable' },
    { data: 'supplier', title: 'Proveedor' },
    { data: 'priority', title: 'Prioridad' },
  ]}
  // Configuración adicional de Handsontable, si es necesario
/>
  const formaData = data.reduce((result, item) => {
    return {
      description: item.description || result.description || '', // Puedes proporcionar un valor por defecto si es necesario
      amount: item.amount || result.amount || '',
      justification: item.justification || result.justification || '',
      responsible: item.responsible || result.responsible || '',
      supplier: item.supplier || result.supplier || '',
      priority: item.priority || result.priority || '',
    };
  }, {});
  
  
 
 useEffect(()=>{
  reset(updateInfo)
  getAllUser(url)
  
  
 },[])

 const hotTableRef = React.createRef();
 //console.log(userIdA)
 
const submit=(data)=>{
  if(updateInfo){
    //si tiene información update
    updateElment('/elementos',updateInfo.id,formaData)

  }else{
    //create
    console.log(formaData)
    createNew('/elementos',formaData)
    
  }
  
  reset({
    items:[{}],
  })
}


  return (

      <form className='form_element' onSubmit={handleSubmit(submit)}>
        <HotTable
        language={esMX.languageCode}
        data={data}
        licenseKey='non-commercial-and-evaluation'
        colHeaders={true} 
        rowHeaders={true}
        //permite ordenar la informacion en orden alfabetico 
        columnSorting={true}  
        contextMenu={["row_above", "row_below"]}     
        >
         <HotColumn data="description" title='Descripción' /> 
         <HotColumn data="amount" title='Cantidad' type='numeric'/> 
         <HotColumn data="justification" title='Justificación' /> 
         <HotColumn data="responsible" title='Responsable' /> 
         <HotColumn data="supplier" title='Proveedor' /> 
         <HotColumn data="priority" title='Prioridad' type='numeric'/>   
            

        </HotTable> 



   
      <button className='form_btn_element' >Enviar </button>
      

    </form>
  )
}

export default Tabla;
