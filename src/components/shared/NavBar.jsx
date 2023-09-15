import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='nvbar'> 
        <ul className='nav_ul_link'>
            <li className='nav_link'> <Link className='link' to='/'>Home</Link></li>
            <li className='nav_link'> <Link className='link' to='/solicitud'>Elementos</Link></li>
            <li className='nav_link'><Link className='link' to='/login'>Login</Link></li>
            <li className='nav_link'><Link className='link' to='/register'>Register</Link></li>
        </ul>
        
    </nav>
  )
}

export default NavBar