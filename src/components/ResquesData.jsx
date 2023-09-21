import { useEffect } from "react"
import useFetch from "../hooks/useFetch"


const ResquesData = ({reque,getAllRequest}) => {

    
    // const url='http://localhost:8080/api/v1'
    
    // const [reque,getAllRequest,createNew, deleteReqId, updateRequest]=useFetch(url)
    useEffect(()=>{

        getAllRequest('/requests')
    
      },[])
    console.log(reque)
    return (
    <div>
        <ul>
            <li>comentarios:{reque.description} </li>
            <li>Rquerimiento:{reque.elemento.id}</li>
            <li></li>
        </ul>
        
        
        <h3>estado:</h3>
        {reque.isApproved === true && <p>Solicitud aprobada</p>}
        {reque?.isApproved === false && <p>Solicitud rechazada</p>}
    
    </div>

  )
}

export default ResquesData