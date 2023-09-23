import { useEffect } from "react"
import useAuth from "../hooks/useAuth"
import './styles/Lists.css'
import useFetch from "../hooks/useFetch"
import ResquesData from "./ResquesData"



const Lists = ({element, deleteElemById,setUpdateInfo,deleteReqId,request}) => {
   
    const url='http://localhost:8080/api/v1/users'
    // const urlBase='http://localhost:8080/api/v1'
    // const userL = JSON.parse(localStorage.getItem("user"));
    // const [request,getAllRequest,createNew, deleteReqId, updateRequest]=useFetch(urlBase)

     const{userIdA,getUserId}=useAuth()
    useEffect(()=>{

        getUserId(url,element?.userId)
        // getAllRequest('/requests')
    
      },[])

  console.log(element)
    const handleDelete=()=>{
        deleteElemById('/elementos',element.id)
      }
    
    const handleUpdate=()=>{
        setUpdateInfo(element)          
    }
     console.log(element.requests[0]?.isApproved)
    return (
        <article className="article_lists"> 
        <section className="article_section">
        
        
            <div className="article_sec">
            <h3 className="article_title">Requerimeinto  #️⃣{element.id}</h3>

            <ul className="article_ul">
                <li className="article_li"><span className="arti_tile">Descripcion: </span><span className="arti_req">{element.description}</span></li>
                <li className="article_li"><span className="arti_tile">Cantidad: </span><span className="arti_req">{element.amount} unid</span></li>
                <li className="article_li"><span className="arti_tile">Justificación: </span><span className="arti_req">{element.justification}</span></li>
                <li className="article_li"><span className="arti_tile">Prioridad: </span><span className="arti_req">{element.priority}</span></li>
                <li className="article_li"><span className="arti_tile">Responsable: </span><span className="arti_req">{element.responsible}</span></li>
                <li className="article_li"><span className="arti_tile">Proveedor: </span><span className="arti_req">{element.supplier}</span></li>
                <li className="article_li"><span className="arti_tile">Solicitud: </span><span className="arti_req">{element.requests[0]?.isApproved === true && <p>Solicitud aprobada</p>}
        {element.requests[0]?.isApproved === false && <p>Solicitud rechazada</p>}</span></li>

            </ul>
            <div  className="article_soli"><span>Solicitado por: </span><span>{userIdA?.name} {userIdA?.lastName}</span></div> 

            <div className="article_content_btn">
            <button className="btn_list"  onClick={handleDelete}><i className='bx bx-trash'></i></button>
            <button className="btn_list"  onClick={handleUpdate}><i className='bx bx-edit-alt'></i></button>
 
            </div>

            </div>
            
           
                      
        
        </section>          
            
           
        </article>
    )
}

export default Lists