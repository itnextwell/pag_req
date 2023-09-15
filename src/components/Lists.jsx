import { useEffect } from "react"
import useAuth from "../hooks/useAuth"



const Lists = ({element, deleteElemById,setUpdateInfo}) => {
   
    const url='http://localhost:8080/api/v1/users'
    // const userL = JSON.parse(localStorage.getItem("user"));

     const{userIdA,getUserId}=useAuth()
    useEffect(()=>{

        getUserId(url,element?.userId)
    
      },[])

  
    const handleDelete=()=>{
        deleteElemById('/elementos',element.id)
      }
    
    const handleUpdate=()=>{
        setUpdateInfo(element)          
    }
    //  console.log(userIdA)
    return (
        <article>           

            <h3>Requerimeinto  #{element.id}</h3>

            <ul>
                <li><span>Descripcion </span><span>{element.description}</span></li>
                <li><span>Cantidad </span><span>{element.amount} unid</span></li>
                <li><span>Justificación </span><span>{element.justification}</span></li>
                <li><span>Prioridad </span><span>{element.priority}</span></li>
                <li><span>Responsable </span><span>{element.responsible}</span></li>
                <li><span>Proveedor </span><span>{element.supplier}</span></li>
                

            </ul>
            <div><span>Solicitado por: </span><span>{userIdA?.name} {userIdA?.lastName}</span></div> 

            <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
            <button onClick={handleUpdate}><i className='bx bx-edit-alt'></i></button>
            
            {/* <div><span>Solicitado por: </span><span>{userL.name} {userL.lastName}</span></div> */}
            
           
        </article>
    )
}

export default Lists