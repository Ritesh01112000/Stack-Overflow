import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import './Navbar.css'
import {useSelector,useDispatch} from 'react-redux'
import Avatar from '../Avatar/Avatar'
import { setCurrentUser } from '../../actions/currentUser'





function Navbar(){
    
    const dispatch = useDispatch();
    
    var User = useSelector((state)=>(state.currentUserReducer)) //For LOGIN LOG Out
    
    // while reloading it was showing login but the local storage data is present
    // so to prevent logut at time of refreshing below use effect is used
    useEffect(()=>{                                
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])



const handleLogOut=()=>{
    localStorage.removeItem("Profile")
    window.location.reload();
}
    
    
    return(
        <nav className='main-nav'>
           <div className='navbar'>
                   <Link to='./' className='nav-item nav-logo' >
                        <img src={logo} alt="logo"/>  
                   </Link>
                   
                   <Link to='./' className='nav-item nav-btn'>About</Link>
                   
                   <Link to='./' className='nav-item nav-btn'>Products</Link>
                   
                   <Link to='./' className='nav-item nav-btn'>For Team</Link>
                   
                   <form>
                        <input placeholder="Search...." type="text" ></input>
                        <img src={search} alt="search" width="18" className='search-icon'/>
                   </form>
                   {User===null?                                  
                       <Link to='./Auth' className='nav-item nav-link '>Log In</Link>:
                       <>
                       
                             <Avatar backgroundColor="#009dff"                //styling properties are sent as props to the avatar component
                                     px="7px" py="7px" borderRadius="50%"     //data between <avatar> </avatar> is accessed as {children} in the avatar page 
                                     color=""><Link to={`/Users/${User.result._id}`} style={{textDecoration:"none" ,color:"white"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>                       
                                            
                       <button className='nav-link' onClick={handleLogOut}>Log Out</button>
                       </>}
           </div>      
        </nav>
    )
}
export default Navbar;