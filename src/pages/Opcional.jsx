
import React, { useState } from 'react'

const Opcional = ({updateInfo}) => {
    const [tableData, setTableData] = useState([
        {  description: '', amount: '', justification: '', responsible: '',supplier:'',
            priority:'',
        },
        // Agrega más filas según sea necesario
      ]);


      const [dataE, setDataE] = useState()

      
      
      const handleInputChange = (e, rowIndex, columnName) => {
        const updatedData = [...tableData];
        updatedData[rowIndex][columnName] = e.target.value;
        setTableData(updatedData);

        const formaData = tableData.reduce((result, item) => {
            //console.log(item.responsible)
           
            return {
              description: item.description || result.description || '', // Puedes proporcionar un valor por defecto si es necesario
              amount: item.amount || result.amount || '',
              justification: item.justification || result.justification || '',
              responsible: item.responsible || result.responsible || '',
              supplier: item.supplier || result.supplier || '',
              priority: item.priority || result.priority || '',
            };
            
          }, {});
          setDataE(formaData)
          console.log(formaData)



      };
      
      const handleSendData = () => {
        // Envía tableData al servidor
        console.log('Datos a enviar:', tableData);
        console.log('Datos a enviar:', dataE);
        // Aquí puedes agregar la lógica para enviar los datos al servidor
      };
      
      return (
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Justificación</th>
                <th>Responsable</th>
                <th>Proveedor</th>
                <th>Prioridad</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((rowData, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{rowData.id}</td>
                  <td>
                    <input
                      type="text"
                      value={rowData.description}
                      onChange={(e) => handleInputChange(e, rowIndex, 'description')}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={rowData.amount}
                      onChange={(e) => handleInputChange(e, rowIndex, 'amount')}
                    />
                  </td>
                  <td>
                  <input
                      type="text"
                      value={rowData.justification}
                      onChange={(e) => handleInputChange(e, rowIndex, 'justification')}
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      value={rowData.responsible}
                      onChange={(e) => handleInputChange(e, rowIndex, 'responsible')}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={rowData.supplier}
                      onChange={(e) => handleInputChange(e, rowIndex, 'supplier')}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={rowData.priority}
                      onChange={(e) => handleInputChange(e, rowIndex, 'priority')}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleSendData}>Enviar Datos</button>
        </div>
      );
}

export default Opcional

//List2 funcional 


// import React, { useEffect } from "react";
// import useAuth from "../hooks/useAuth";


// const Lists2 = ({ element, deleteElemById, setUpdateInfo, deleteReqId, getAllRequest, state, getAllElement }) => {
//   const url = "http://localhost:8080/api/v1/users";
//   const { userIdA, getUserId } = useAuth();
//   //request
//   const [requests, setRequests] = useState()


//   useEffect(() => {
//     getUserId(url, element?.userId);
//     getAllRequest("/requests");
//     getAllElement("/elementos");
//   }, [state]);
   
//   const handleDelete = () => {
//     deleteElemById("/elementos", element.id);
//     deleteReqId("/requests", element.requests[0]?.id);
//   };

//   const handleUpdate = () => {
//     setUpdateInfo(element);
//   };

//   const handleAproved=()=>{
//     setRequests(true)
//   }

//   const handleX=()=>{
//     setRequests(false)
//   }

  

//   return (
//     <div className="contenedor_list2">
//     <table className='table_table2_list2' border="1">
//     <thead className='thead_table2'>
//         <tr className='tr_table2'>
//             <th className='th_table2'>ID</th>
//             <th className='th_table2'>Descripción</th>
//             <th className='th_table2_number'>Cantidad</th>
//             <th className='th_table2'>Justificación</th>
//             <th className='th_table2'>Responsable</th>
//             <th className='th_table2'>Proveedor</th>
//             <th className='th_table2_number'>Prioridad</th>
//             <th className='th_table2_number'>Solicitud</th>
//             <th className='th_table2_number'>Solicitado</th>
//             <th className='th_table2'>Acción</th>
//         </tr>
//     </thead>
//     <tbody className='tbody_table2_list2'>
//         <tr className="tr_table2_list2">
//           <td className="td_table2_list2">{element.id}</td>
//           <td className="td_table2_list2">{element.description}</td>
//           <td className="td_table2_list2">{element.amount}</td>
//           <td className="td_table2_list2">{element.justification}</td>
//           <td className="td_table2_list2">{element.responsible}</td>
//           <td className="td_table2_list2">{element.supplier}</td>
//           <td className="td_table2_list2">{element.priority}</td>
//           <td className="td_table2_list2">
//           <span className="arti_req">
//                         {element.requests?.length === 0 && <p>Pendiente</p>}
//                         {element.requests?.length > 0 && (
//                             <div>
//                                 {element.requests[0].isApproved === true && <p>Aprobada</p>}
//                                 {element.requests[0].isApproved === false && <p>Rechazada</p>}
//                             </div>
//                             )}
//                     </span>
//           </td>
//           <td className="td_table2_list2">{`${userIdA?.name} ${userIdA?.lastName}`}</td>
//           <td className="td_table2_list2">
//           <button className="btn_list"  onClick={handleDelete}><i className='bx bx-trash'></i></button>
//             <button className="btn_list"  onClick={handleUpdate}><i className='bx bx-edit-alt'></i></button>
//             <button className="btn_list"  onClick={handleAproved}><i className='bx bx-check'></i></button>    
//             <button className="btn_list"  onClick={handleX}><i className='bx bx-x'></i></button>        
//           </td>
//         </tr>
//         {/* Puedes agregar más filas según tus necesidades */}
//       </tbody>
//     </table>
//     </div>
//   );
// };

// export default Lists2;



/// termina aca 

// import React, { useEffect } from 'react';
// import { useForm, useFieldArray } from 'react-hook-form';
// import useAuth from '../hooks/useAuth';
// import useFetch from '../hooks/useFetch';
// import './styles/Table2.css'
// import Lists2 from '../components/Lists2';
// import Opcional from './opcional';

// const Table2 = ({updateInfo,element}) => {

//     const urlb = 'http://localhost:8080/api/v1'
//     const [elements, getAllElement, createNew, deleteElemById, updateElment] = useFetch(urlb)
//     const [request,getAllRequest,createNewReq, deleteReqId, updateRequest]=useFetch(urlb)
//     const { register, control, handleSubmit,reset } = useForm({
//         defaultValues: {
//             items: [
//                 {
//                     description: '',
//                     amount: '',
//                     justification: '',
//                     responsible: '',
//                     supplier: '',
//                     priority: '',
//                 },
//             ],
//         },
//     });

    

//     const url = 'http://localhost:8080/api/v1/users'
//     const { userIdA, getAllUser } = useAuth()


//     useEffect(() => {
//         reset(updateInfo)
//         getAllUser(url)

//     }, [updateInfo])

//     const { fields, append, remove } = useFieldArray({
//         control,
//         name: 'items',
//     });


//     const sumit = (data) => {
//         // Envía data.items al servidor
//         console.log('Datos a enviar:', data.items);

//         const formaData = data.items.reduce((result, item) => {


//             return {
//                 description: item.description || result.description || '', // Puedes proporcionar un valor por defecto si es necesario
//                 amount: item.amount || result.amount || '',
//                 justification: item.justification || result.justification || '',
//                 responsible: item.responsible || result.responsible || '',
//                 supplier: item.supplier || result.supplier || '',
//                 priority: item.priority || result.priority || '',
//             };

            

//         }, {});
        
//         //  lógica para enviar los datos al servidor

//         if(updateInfo){
//             //si tiene información update
//             updateElment('/elementos',updateInfo.id,formaData)
            
//           }else{
//             //create
//             console.log("aca estoy")
//             console.log(formaData)
//             createNew('/elementos',formaData)
//          }
//     };

//     return (
//         <div>
    
//         <form className='form_table2' onSubmit={handleSubmit(sumit)}>
//             <table className='table_table2' border="1">
//                 <thead className='thead_table2'>
//                     <tr className='tr_table2'>
//                         <th className='th_table2'>ID</th>
//                         <th className='th_table2'>Descripción</th>
//                         <th className='th_table2_number'>Cantidad</th>
//                         <th className='th_table2'>Justificación</th>
//                         <th className='th_table2'>Responsable</th>
//                         <th className='th_table2'>Proveedor</th>
//                         <th className='th_table2_number'>Prioridad</th>
//                         <th className='th_table2'>Acción</th>
//                     </tr>
//                 </thead>
//                 <tbody className='tbody_table2'>
//                     {fields.map((item, index) => (
//                         <tr key={item.id}>
//                             <td className='numero_table'>{index + 1}</td>
//                             <td  className='td_table2'>
//                                 <textarea  className='input_table2'
//                                     {...register(`items[${index}].description`)}
//                                     defaultValue={item.description}
//                                     rows={1}
//                                 />
//                             </td>
//                             <td className='td_table2_number'>
//                                 <input className='input_table2'
//                                     {...register(`items[${index}].amount`)}
//                                     defaultValue={item.amount}
//                                     type="number"
//                                 />
//                             </td>
//                             <td className='td_table2'>
//                                 <textarea className='input_table2'
//                                     {...register(`items[${index}].justification`)}
//                                     defaultValue={item.justification}
//                                 />
//                             </td>
//                             <td className='td_table2'>
//                             <select
//                   {...register(`items[${index}].responsible`)}
//                   defaultValue={item.responsible}
//                   className='form_input_element'
//                 >
//                   <option value="">Seleccione un responsable</option>
//                   {userIdA?.map((userAll) => (
//                     <option
//                       key={userAll.id}
//                       value={`${userAll.name} ${userAll.lastName}`}
//                     >
//                       {userAll.name} {userAll.lastName}
//                     </option>
//                   ))}
//                 </select>
//                             </td>
//                             <td className='td_table2'>
//                                 <textarea className='input_table2'
//                                     {...register(`items[${index}].supplier`)}
//                                     defaultValue={item.supplier}
//                                 />
//                             </td>
//                             <td className='td_table2_number'>
//                                 <input className='input_table2'
//                                     {...register(`items[${index}].priority`)}
//                                     defaultValue={item.priority}
//                                     type="number"
//                                 />
//                             </td>
//                             <td className='td_table2'>
//                                 <button className='button_eliminar' type="button" onClick={() => remove(index)}>
//                                     Eliminar
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <button className='button_table'  type="button" onClick={() => append({})}>
//                 Agregar Fila
//             </button>
//             <button className='button_table' type="submit">Enviar Datos</button>
            
//         </form>
        
//         <div>
                
        
//        </div>
                 
           
            
//         </div>
//     );
    
// };

// export default Table2;

//******************************************************** */
//**************************************************
//**********************************************
//********************************************* */ */ */


// import React, { useEffect } from "react";
// import useAuth from "../hooks/useAuth";


// const Lists2 = ({ element, deleteElemById, setUpdateInfo, deleteReqId, getAllRequest, state, getAllElement }) => {
//   const url = "http://localhost:8080/api/v1/users";
//   const { userIdA, getUserId } = useAuth();

//   useEffect(() => {
//     getUserId(url, element?.userId);
//     getAllRequest("/requests");
//     getAllElement("/elementos");
//   }, [state]);

//   const handleDelete = () => {
//     deleteElemById("/elementos", element.id);
//     deleteReqId("/requests", element.requests[0]?.id);
//   };

//   const handleUpdate = () => {
//     setUpdateInfo(element);
//   };

//   return (
//     <table className='table_table2' border="1">
//     <thead className='thead_table2'>
//         <tr className='tr_table2'>
//             <th className='th_table2'>ID</th>
//             <th className='th_table2'>Descripción</th>
//             <th className='th_table2_number'>Cantidad</th>
//             <th className='th_table2'>Justificación</th>
//             <th className='th_table2'>Responsable</th>
//             <th className='th_table2'>Proveedor</th>
//             <th className='th_table2_number'>Prioridad</th>
//             <th className='th_table2_number'>Solicitud</th>
//             <th className='th_table2_number'>Solicitado</th>
//             <th className='th_table2'>Acción</th>
//         </tr>
//     </thead>
//     <tbody className='tbody_table2'>
//         <tr>
//           <td>{element.id}</td>
//           <td>{element.description}</td>
//           <td>{element.amount}</td>
//           <td>{element.justification}</td>
//           <td>{element.responsible}</td>
//           <td>{element.supplier}</td>
//           <td>{element.priority}</td>
//           <td>
//             {element.requests?.length === 0 ? (
//               <p>Pendiente</p>
//             ) : (
//               element.requests[0].isApproved === true ? (
//                 <p>Aprobada</p>
//               ) : (
//                 <p>Rechazada</p>
//               )
//             )}
//           </td>
//           <td>{`${userIdA?.name} ${userIdA?.lastName}`}</td>
//           <td>
//           <button className="btn_list"  onClick={handleDelete}><i className='bx bx-trash'></i></button>
//             <button className="btn_list"  onClick={handleUpdate}><i className='bx bx-edit-alt'></i></button>
//           </td>
//         </tr>
//         {/* Puedes agregar más filas según tus necesidades */}
//       </tbody>
//     </table>
//   );
// };

// export default Lists2;
