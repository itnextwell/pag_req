import { useEffect } from "react"
import useAuth from "../hooks/useAuth"
import './styles/Lists.css'


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
                

            </ul>
            <div  className="article_soli"><span>Solicitado por: </span><span>{userIdA?.name} {userIdA?.lastName}</span></div> 

            <div className="article_content_btn">
            <button className="btn_list"  onClick={handleDelete}><i className='bx bx-trash'></i></button>
            <button className="btn_list"  onClick={handleUpdate}><i className='bx bx-edit-alt'></i></button>
 
            </div>

            </div>
            
            {/* <div><span>Solicitado por: </span><span>{userL.name} {userL.lastName}</span></div> */}
        
        
        </section>          
            
           
        </article>
    )
}

export default Lists