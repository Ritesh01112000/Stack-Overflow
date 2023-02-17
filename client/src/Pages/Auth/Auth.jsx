import React from 'react'
import './Auth.css'
import {useState} from 'react'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import { login,signup } from '../../actions/auth'
import { useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'


const Auth = () => {
   
    const [isSignup,setIsSignup]=useState(false)

 
    const [name,setName] =useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate() 

    const handleSwitch =() =>{
         setIsSignup(!isSignup)  
    }

     const handleSubmit =(e) =>{
         e.preventDefault() //prevents refresh
         if(!email && !password){
            alert("Enter email and password")
         }
         if(isSignup){
          if(!name){
               alert("Enter a name to continue")
          }
          dispatch(signup({name,email,password},navigate))
         
     }
     else{
           dispatch(login({email,password},navigate))
     }
          }


  return (
    <section className='Auth-section'>
       {isSignup && <AboutAuth/>}
        <div className='Auth-container-2'>
             {!isSignup && <img src={icon} alt="stackoverflow" className='login-logo'/>}     
            <form className='form' onSubmit={handleSubmit}>
              
              {isSignup && 
              <label htmlFor='name'><h4>Display Name</h4>
              <input type="text" id='name' name='name'
                onChange={(e)=>{setName(e.target.value)}}></input>
              </label>  }

              <label htmlFor='email'>
                   <h4>E-mail</h4>
                   <input type="email" name="name" id="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
              </label>
             
             
              <label htmlFor='password'>
                   <div style={{display:'flex',justifyContent:"space-between"}}>
                      <h4>Password</h4>
                      
                      {!isSignup && <p style={{color:"#007ac6", fontSize:"13px"}}>Forgot Password</p>}
                      {/* this above line will not dispaly forget password in the sinup page */}
                   </div>
                   <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                   {isSignup && <p  style={{color:"#666767", fontSize:"13px"}}>The password must contain atleast 8 <br/>character , including atleast 1 number and <br/>1 letter </p>}
                   </label>
                   
                   {isSignup && 
                            <label htmlFor='check'>
                           <input type="checkbox" id="check"/>
                           <p style={{fontSize:"13px"}}>
                            Opt-in to receive occasional product<br/> updates, user research invitations, 
                                company <br/>announcements, and digests.
                                </p>
                           </label>}
             
             
                
                
                 <button type="submit" className='Auth-btn'>{isSignup?"Sign-Up":"Login"}</button>
           
               
                {isSignup && <p style={{color:"#666767", fontSize:"13px"}}>By clicking “Sign up”, you agree to our
                               <span style={{color:"#007ac6"}}> terms of <br/>service</span>, 
                               <span style={{color:"#007ac6"}}> privacy policy </span>and 
                               <span style={{color:"#007ac6"}}> cookie policy</span></p>}
            </form>     
             <div style={{display:"flex"}}>
             {isSignup?"Already have an account":"Don't have an account"}
             <button onClick={handleSwitch} className="handle-btn" type="button" >{isSignup?"Log-In":" Sign-up"}</button>
             </div>
        </div>

            {/* { condition && expression}  it is used as if but it is actually AND        */}
    </section>
  )
}

export default Auth