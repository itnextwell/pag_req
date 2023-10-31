import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = ({isLogget}) => {

  if (isLogget) {
    //si esta logged
    return <Outlet/>
  }else{
    //si no esta logged
   return <Navigate to='/login'/>
   
    

  }
}

export default ProtectedRoutes