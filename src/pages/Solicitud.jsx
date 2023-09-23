import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import Lists from '../components/Lists'
import Elements from '../components/Elements'
import './styles/Solicitud.css'
import Requests from '../components/Requests'
import ResquesData from '../components/ResquesData'



const Solicitud = () => {
     const [updateInfo, setUpdateInfo] = useState()

  const url='http://localhost:8080/api/v1'
  const [state, setState] = useState(false)
    
  const [request,getAllRequest,createNewReq, deleteReqId, updateRequest]=useFetch(url)
  const [ elements,getAllElement,createNew, deleteElemById, updateElment]=useFetch(url)
  const [isShow, setIsShow] = useState(false)
  
  const handleClick=()=>{
    setIsShow(!isShow)
  }

  useEffect(()=>{

    getAllElement('/elementos')
    getAllRequest('/requests')

  },[])
  return (
    <div className='div_solicitud'>
        <section className='section_sol'>
        <h1 className='title_solicitud'>Solicitud de Elementos</h1>
        
        <button className='button_solicitud' onClick={handleClick}>Elementos   </button>
        {
          isShow 
          ?<Elements createNew={createNew}
          updateInfo={updateInfo}
          updateElment={updateElment}
          />
          :  <h3 className='solitud_subtitle'>Solicitud</h3>
        }       

        <div>
        <Requests
            state={state}
            setState={setState}
          />   
          
          </div> 
        
        <div className='solicitud_list'>
        
          {
            elements?.map(element=>(
              <Lists
              element={element}
              key={element.id}
              deleteElemById={deleteElemById}
              deleteReqId={deleteReqId}
              
              setUpdateInfo={setUpdateInfo}
              />
            ))
                      

          } 
           {/* {
            request?.map(reque=>(
                <ResquesData 
                    reque={reque}
                    key={reque.id}
                    getAllRequest={getAllRequest} 
                    state={state}
                    setState={setState}
                    
                    />

            ))
        } */}

        

             

        </div>

        </section>
    </div>
    
  )
}

export default Solicitud