import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

const LandPage = () => {
  return (
    <div>
      <div className='landing-page'>
      <h3>Welcome to Fundi-Bots React-js Todo and Form app</h3>
      <img src='logo192.png' alt='success-image' className='form-img-2'/>
      <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components. 
      <br></br>
      <span> It is maintained by Meta and a community of individual developers and companies</span></p>
      <p></p>
      
      <div className='btns'>
        <Link to='/todolist' className='landing-button'>Todo App</Link>
        <br></br>
        <Link to='/form' className='landing-button'>MyForms</Link>
      </div>
    </div>

    </div>
  )
}

export default LandPage
