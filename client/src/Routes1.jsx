import React from 'react'
import {Routes,Route} from 'react-router-dom'   //switch wraps all the routes 

import Auth from './Pages/Auth/Auth'
import Home from './Pages/Home/Home'
import Question from './Pages/Question/Question'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Question/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import User from './Pages/User/User'
import UserProfile from './Pages/UserProflie/UserProfile'
const Routes1=()=>{
    return(
         <Routes >
            <Route path = '/' element={<Home/>}/>
            <Route path ='/Auth' element={<Auth/>}/>
            <Route path ='/Question' element={<Question/>}/>
            <Route path= '/AskQuestion' element={<AskQuestion/>}/>
            <Route path= '/Questions/:id' element={<DisplayQuestion/>}/>
            <Route path = '/Tags' element= {<Tags/>}/>
            <Route path = '/Users' element= {<User/>}/>
            <Route path = '/Users/:id' element = {<UserProfile/>}/>
        
        </Routes>
        
        )

}
export default Routes1;