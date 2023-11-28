import React, { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import useFetch from '../hooks/useFetch';
import './styles/Table2.css'
import Lists2 from '../components/Lists2';
import Opcional from './opcional';

const Table2 = ({createNew,updateInfo,updateElment }) => {

    // const urlb = 'http://localhost:8080/api/v1'
    // const [elements, getAllElement, createNew, deleteElemById, updateElment] = useFetch(urlb)
    // const [request,getAllRequest,createNewReq, deleteReqId, updateRequest]=useFetch(urlb)
    const { register, control, handleSubmit,reset } = useForm({
        defaultValues: {
            items: [
                {
                    description: '',
                    amount: '',
                    justification: '',
                    responsible: '',
                    supplier: '',
                    priority: '',
                },
            ],
        },
    });

    

    const url = 'http://localhost:8080/api/v1/users'
    const { userIdA, getAllUser } = useAuth()


    useEffect(() => {
        reset(updateInfo)
        getAllUser(url)

    }, [updateInfo])

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'items',
    });


    const sumit = (data) => {
        // Envía data.items al servidor
        // console.log('Datos a enviar:', data.items);

        const formaData = data.items.reduce((result, item) => {


            return {
                description: item.description || result.description || '', // Puedes proporcionar un valor por defecto si es necesario
                amount: item.amount || result.amount || '',
                justification: item.justification || result.justification || '',
                responsible: item.responsible || result.responsible || '',
                supplier: item.supplier || result.supplier || '',
                priority: item.priority || result.priority || '',
            };

            

        }, {});
        
        //  lógica para enviar los datos al servidor

        if(updateInfo){
            //si tiene información update
            updateElment('/elementos',updateInfo.id,formaData)
            
          }else{
            //create
            console.log("aca estoy")
            console.log(formaData)
            createNew('/elementos',formaData)
         }
        //  append({
        //     description:'',
        //     amount:'',
        //     justification:'',
        //     responsible:'',
        //     supplier:'',
        //     priority:''
        //   })
        reset({
            items: [
              {
                description: '',
                amount: '',
                justification: '',
                responsible: '',
                supplier: '',
                priority: '',
              },
            ],
          });
    };

    return (
        <div>
    
        <form className='form_table2' onSubmit={handleSubmit(sumit)}>
            <table className='table_table2' border="1">
                <thead className='thead_table2'>
                    <tr className='tr_table2'>
                        <th className='th_table2'>ID</th>
                        <th className='th_table2'>Descripción</th>
                        <th className='th_table2_number'>Cantidad</th>
                        <th className='th_table2'>Justificación</th>
                        <th className='th_table2'>Responsable</th>
                        <th className='th_table2'>Proveedor</th>
                        <th className='th_table2_number'>Prioridad</th>
                        <th className='th_table2'>Acción</th>
                    </tr>
                </thead>
                <tbody className='tbody_table2'>
                    {fields.map((item, index) => (
                        <tr key={item.id}>
                            <td className='numero_table'>{index + 1}</td>
                            <td  className='td_table2'>
                                <textarea  className='input_table2'
                                    {...register(`items[${index}].description`)}
                                    defaultValue={item.description}
                                    rows={1}
                                />
                            </td>
                            <td className='td_table2_number'>
                                <input className='input_table2'
                                    {...register(`items[${index}].amount`)}
                                    defaultValue={item.amount}
                                    type="number"
                                />
                            </td>
                            <td className='td_table2'>
                                <textarea className='input_table2'
                                    {...register(`items[${index}].justification`)}
                                    defaultValue={item.justification}
                                />
                            </td>
                            <td className='td_table2'>
                            <select
                  {...register(`items[${index}].responsible`)}
                  defaultValue={item.responsible}
                  className='form_input_element'
                >
                  <option value="">Seleccione un responsable</option>
                  {userIdA?.map((userAll) => (
                    <option
                      key={userAll.id}
                      value={`${userAll.name} ${userAll.lastName}`}
                    >
                      {userAll.name} {userAll.lastName}
                    </option>
                  ))}
                </select>
                            </td>
                            <td className='td_table2'>
                                <textarea className='input_table2'
                                    {...register(`items[${index}].supplier`)}
                                    defaultValue={item.supplier}
                                />
                            </td>
                            <td className='td_table2_number'>
                                <input className='input_table2'
                                    {...register(`items[${index}].priority`)}
                                    defaultValue={item.priority}
                                    type="number"
                                />
                            </td>
                            <td className='td_table2'>
                                <button className='button_eliminar' type="button" onClick={() => remove(index)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='button_table'  type="button" onClick={() => append({})}>
                Agregar Fila
            </button>
            <button className='button_table' type="submit">Enviar Datos</button>
            
        </form>
        
                     
           
            
        </div>
    );
    
};

export default Table2;
