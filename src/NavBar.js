import React from 'react';
import './NavBar.css';
import { Link, Outlet } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
    

    <>
      <nav>
        <Link to='/' className='links'>HomePage</Link>
        <div className='btns'>
          <Link to='/todolist' className='nav-btn1'>Todos</Link>
          <Link to='/form' className='nav-btn2'>Forms</Link>
          <Link to='/profile'className='nav-btn3'>About Us</Link>
        </div>
        
        

        
      </nav>
      <Outlet />
    </>
  
    </div>
  )
}

export default NavBar
