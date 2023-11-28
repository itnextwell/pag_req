import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useFetch from "../hooks/useFetch";
import { useForm } from "react-hook-form";


const Lists2 = ({ element, deleteElemById, setUpdateInfo, state, getAllElement,setState }) => {
  const {register,handleSubmit,reset,getValues}=useForm()
  const url = "http://localhost:8080/api/v1/users";
  const urlb='http://localhost:8080/api/v1'
   //request
   const [requests, setRequests] = useState()
  const [request,getAllRequest,createNew, deleteReqId, updateRequest,error]=useFetch(urlb)
  
  const { userIdA, getUserId } = useAuth();
 


  useEffect(() => {
    getUserId(url, element?.userId);
    getAllRequest("/requests");
    getAllElement("/elementos");
  }, [state]);
   
  const handleDelete = () => {
    deleteElemById("/elementos", element.id);
    deleteReqId("/requests", element.requests[0]?.id);
  };

  const handleUpdate = () => {
    setUpdateInfo(element);
  };

  const handleAproved=()=>{
    setRequests(true)
    
  }

  const handleX=()=>{
    setRequests(false)
    
  }
  
  const sumit=()=>{
        
    const data={
      description:getValues('description'),    
        isApproved:requests,
        elementoId:element.id
           
    }
    // console.log(data)
    createNew('/requests',data)
    setState(!state)  
    reset({
      description:'',
      elementoId:''
  })
    

}



  return (
    <div className="contenedor_list2">
    <table className='table_table2_list2' border="1">
    <thead className='thead_table2'>
        <tr className='tr_table2'>
            <th className='th_table2'>ID</th>
            <th className='th_table2'>Descripción</th>
            <th className='th_table2_number'>Cantidad</th>
            <th className='th_table2'>Justificación</th>
            <th className='th_table2'>Responsable</th>
            <th className='th_table2'>Proveedor</th>
            <th className='th_table2_number'>Prioridad</th>
            <th className='th_table2_number'>Solicitud</th>
            <th className='th_table2_number'>Solicitado</th>
            <th className='th_table2'>Acción</th>
        </tr>
    </thead>
    <tbody className='tbody_table2_list2'>
        <tr className="tr_table2_list2">
          <td className="td_table2_list2">{element.id}</td>
          <td className="td_table2_list2">{element.description}</td>
          <td className="td_table2_list2">{element.amount}</td>
          <td className="td_table2_list2">{element.justification}</td>
          <td className="td_table2_list2">{element.responsible}</td>
          <td className="td_table2_list2">{element.supplier}</td>
          <td className="td_table2_list2">{element.priority}</td>
          <td className="td_table2_list2">
          <span className="arti_req">
                        {element.requests?.length === 0 && <p>Pendiente</p>}
                        {element.requests?.length > 0 && (
                            <div>
                                {element.requests[0].isApproved === true && <p>Aprobada</p>}
                                {element.requests[0].isApproved === false && <p>Rechazada</p>}
                            </div>
                            )}
                    </span>
          </td>
          <td className="td_table2_list2">{`${userIdA?.name} ${userIdA?.lastName}`}</td>
          <td className="td_table2_list2_ac">
          <button className="btn_list"  onClick={handleDelete}><i className='bx bx-trash'></i></button>
          <button className="btn_list"  onClick={handleUpdate}><i className='bx bx-edit-alt'></i></button>
           
           
           
           <form className="form_list2" onSubmit={handleSubmit(sumit)}>
           <div className=''>
                <label className='form_label_list2' htmlFor="description">Descripción</label>
                <input className='form_input_list2'  {...register('description')} id="description" type="text" />
            </div>
            {error && <p className="error-message">Solicitud ya procesada </p>}
            <div className="boton_table2">
            <button className="btn_list2"  onClick={handleAproved}><i className='bx bx-check'></i></button>    
            <button className="btn_list2"  onClick={handleX}><i className='bx bx-x'></i></button>        

            </div>
            
           </form>
          </td>
        </tr>
        {/* Puedes agregar más filas según tus necesidades */}
      </tbody>
    </table>

    </div>
  );
};

export default Lists2;
