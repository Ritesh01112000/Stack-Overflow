import React from 'react'
import { useSelector } from 'react-redux'
import User1 from './User1'
import './Users.css'
const UsersList = () => {
  
  
 const users = useSelector((state)=>state.usersReducer) 
 
    return (
    <div className='user-List-container'>
      {
        users.map((user)=>(
          <User1 user = {user} key = {user._id}/>
        ))
      }

    </div>
  )
}

export default UsersList