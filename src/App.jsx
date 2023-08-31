import { useEffect, useState } from 'react'

import './App.css'
import Lists from './components/Lists'
import Elements from './components/Elements'
import useFetch from './hooks/useFetch'

function App() {
  const [ elements,getAllElement,createNew, deleteElemById]=useFetch()
  const [isShow, setIsShow] = useState(false)
  
  const handleClick=()=>{
    setIsShow(!isShow)
  }

  useEffect(()=>{

    getAllElement()

  },[])

  const handleCreateEle =()=>{
    const data={
      description:'valvula',
      amount:4,
      justification:'taller',
      resposible:'luis',
      supplier:'na',
      priority:2
    }
    createNew(data)
  }


  



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
          ?<Elements createNew={createNew}/>
          :  <h3>Solicitud</h3>
        }

        
        
        <div>
          <Lists/>

        </div>
        
      </section>
    </div>
  )
}

export default App
