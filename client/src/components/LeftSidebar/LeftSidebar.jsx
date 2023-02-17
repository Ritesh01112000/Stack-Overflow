import React from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import Globe from '../../assets/Globe.svg'
import Question from '../../Pages/Question/Question'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
          <NavLink to='/' className='side-nav-links' activeClass='active'>
            <p>Home</p>
          </NavLink>
          <div className='side-nav-div'>
            <div><p>PUBLIC</p></div>
            <NavLink to='/Question' className="side-nav-links">
              <img src={Globe} alt="globe"/>
              <p style={{paddingLeft:"10px"}}>Questions</p>
            </NavLink>
            <NavLink to='/Tags' className='side-nav-links' activeClass='active'>
            <p>Tags</p>
            </NavLink>
            <NavLink to='/Users' className="side-nav-links"activeClass='active'>
              <p>Users</p>
            </NavLink>
            
          </div>
        </nav>
    
    </div>
  )
}
export default LeftSidebar;
