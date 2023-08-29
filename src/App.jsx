import { useState } from 'react'

import './App.css'
import Lists from './components/Lists'
import Elements from './components/Elements'

function App() {
  const [isShow, setIsShow] = useState(false)
  
  const handleClick=()=>{
    setIsShow(!isShow)
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
          ?<Elements/>
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
