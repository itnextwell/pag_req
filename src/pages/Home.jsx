import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import Lists from '../components/Lists'
import Elements from '../components/Elements'


const Home = () => {
     const [updateInfo, setUpdateInfo] = useState()

  const url='http://localhost:8080/api/v1'
  const [ elements,getAllElement,createNew, deleteElemById, updateElment]=useFetch(url)
  const [isShow, setIsShow] = useState(false)
  
  const handleClick=()=>{
    setIsShow(!isShow)
  }

  useEffect(()=>{

    getAllElement('/elementos')

  },[])
  return (
    <div>
        <section>
        <h1>Solicitud de Elementos</h1>
        <p>RQ</p>
        <button onClick={handleClick}>Elementos   </button>
        {
          isShow 
          ?<Elements createNew={createNew}
          updateInfo={updateInfo}
          updateElment={updateElment}
          />
          :  <h3>Solicitud</h3>
        }        
        
        <div>
          {
            elements?.map(element=>(
              <Lists
              element={element}
              key={element.id}
              deleteElemById={deleteElemById}
              
              setUpdateInfo={setUpdateInfo}
              />
            ))          

          }         

        </div>

        </section>
    </div>
    
  )
}

export default Home