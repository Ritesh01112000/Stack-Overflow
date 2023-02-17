
import './App.css';
import React from 'react';
import Navbar from'./components/Navbar/Navbar'
import {BrowserRouter,Routes, Link , Route} from 'react-router-dom'
import Routes1 from './Routes1';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { fetchAllQuestions } from './actions/question';
import {fetchAllUsers} from './actions/Users'

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(fetchAllQuestions())    //this use effect is written because----
                                     //when project goes live then to fetchAllQuestions should be called       
                                         //for calling this function this use effect is used   
     dispatch(fetchAllUsers())
    
    }, [dispatch])               
  return (
    <div className="App">
     
      <BrowserRouter>
                                                            
          <Navbar/>
          <Routes1/>
         
      </BrowserRouter>
     </div>
  );
}

export default App;
