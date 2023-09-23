import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import Lists from "./Lists"


const ResquesData = ({reque,getAllRequest,state,setState}) => {

    
    // const url='http://localhost:8080/api/v1'
    
    // const [reque,getAllRequest,createNew, deleteReqId, updateRequest]=useFetch(url)
    useEffect(()=>{

        getAllRequest('/requests')
    
      },[state])
    
    return (
    <div className="requesData">
        <ul>
            <li>comentarios:{reque.description} </li>
            <li>Requerimiento:{reque.elemento.id}</li>
           
        </ul>
        
        
        <h3>estado:</h3>
        {reque.isApproved === true && <p>Solicitud aprobada</p>}
        {reque?.isApproved === false && <p>Solicitud rechazada</p>}
        
        
    </div>

  )
}

export default ResquesData