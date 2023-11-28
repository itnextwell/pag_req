import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

const NavBar = ({setIsLogget}) => {
  
  const logout=()=>{
    //navigate('/login')
    //localStorage.setItem("token", "");
    setIsLogget(false)
    localStorage.clear()


  }
  return (
    <nav className='nvbar'> 
        <ul className='nav_ul_link'>
            <li className='nav_link'> <Link className='link' to='/'>Home</Link></li>
            <li className='nav_link'> <Link className='link' to='/solicitud'>Elementos</Link></li>
            <li className='nav_link'><Link className='link' to='/register'>Register</Link></li>
            <li className='nav_link'><Link className='link' to='/login'>Login</Link></li>
            <li className='nav_link'><Link className='link'  to='/login' onClick={logout}>Log out</Link></li>
            <li className='nav_link'><Link className='link'  to='/tabla'>tabla</Link></li>
            <li className='nav_link'><Link className='link'  to='/tabla2'>tabla 2</Link></li>
        </ul>
        
    </nav>
  )
}

export default NavBar