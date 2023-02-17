import React from 'react'
import './Users.css'
import {useLocation} from 'react-router-dom'
import leftSideBar from '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'
import './Users.css'
const User = () => {

  const location = useLocation();
  console.log(location.pathname,"to know")
  return (
    
    <div className='home-container-1'>
       <leftSideBar/>
         <div className='home-container-2' style={{marginTop:"30px"}}>
              
              <h1 style={{fontWeight:"400"}}>Users</h1>
                         <UsersList/>:
              
         </div>
      </div>
  )
}

export default User