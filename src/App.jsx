import { useEffect, useState } from 'react'

import './App.css'
import Lists from './components/Lists'
import Elements from './components/Elements'
import useFetch from './hooks/useFetch'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import NavBar from './components/shared/NavBar'
import Solicitud from './pages/Solicitud'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Tabla from './pages/Tabla'
import Table2 from './pages/Table2'



function App() {

  // const [updateInfo, setUpdateInfo] = useState()

  // const url='http://localhost:8080/api/v1'
  // const [ elements,getAllElement,createNew, deleteElemById, updateElment]=useFetch(url)
  // const [isShow, setIsShow] = useState(false)
  
  // const handleClick=()=>{
  //   setIsShow(!isShow)
  // }

  // useEffect(()=>{

  //   getAllElement('/elementos')

  // },[])

  const [isLogget, setIsLogget] = useState(false)
  return (
    <div className='container'> 
       <header>
        <img className='logo_next' src="next.png" alt="logo" />
        
      </header>
      <NavBar setIsLogget={setIsLogget}/>   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login setIsLogget={setIsLogget}/>}/>
        <Route element={<ProtectedRoutes isLogget={isLogget} />}>
          <Route path='/solicitud' element={<Solicitud/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/tabla' element={<Tabla/>}/>
          <Route path='/tabla2' element={<Table2/>}/>
        </Route>

      </Routes> 

     
      {/* <section>
      

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

        
        
      </section> */}
    </div>
  )
}

export default App
