import { useEffect, useState } from 'react'

import './App.css'
import Lists from './components/Lists'
import Elements from './components/Elements'
import useFetch from './hooks/useFetch'

function App() {

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

      <header>
        <img src="nextwell.png" alt="logo" />
        <h1>Solicitud de Elementos</h1>
        <p>RQ</p>
      </header>
      <section>

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

export default App
