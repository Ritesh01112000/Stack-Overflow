import React from 'react'
import {Link,useNavigate,useLocation} from 'react-router-dom'
import Questionsbar from './Questionsbar'
import './HomeMainbar.css'
import {useSelector} from 'react-redux'
const HomeMainbar = () => {
    const user=null;
    const navigate=useNavigate()
    const checkAuth=()=>{
        if(user===1)
         {
            alert("Login or Signup to ask a question");
            navigate('/Auth')
         }
         else
         {
            navigate('/AskQuestion')
         }
    }

      const questionsList = useSelector(state => state.questionsReducer)
    

    // below code is used while designing front end now when backend is presnt it is retrieved from db 


    // var questionsList1 = [{ 
    //     _id: 1,
    //         upVotes: 3,
    //         downVotes: 2,
    //         noOfAnswers: 2,
    //         questionTitle: "What is a function?",
    //         questionBody: "It meant to be",
    //         questionTags: ["java", "node js", "react js", "mongo db", "express js"],
    //         userPosted: "mano",
    //         userId: 1,
    //         askedOn: "jan 1",
    //         answer: [{
    //             answerBody: "Answer",
    //             userAnswered: 'kumar',
    //             answeredOn: "jan 2",
    //             userId: 2,
    //         }]
    //     },{ 
    //         _id: 2,
    //         upVotes: 3,
    //         downVotes: 2,
    //         noOfAnswers: 0,
    //         questionTitle: "What is a function?",
    //         questionBody: "It meant to be",
    //         questionTags: ["javascript", "R", "python"],
    //         userPosted: "mano",
    //         askedOn: "jan 1",
    //         userId: 1,
    //         answer: [{
    //             answerBody: "Answer",
    //             userAnswered: 'kumar',
    //             answeredOn: "jan 2",
    //             userId: 2,
    //         }]
    //     },{ 
    //         _id: 3,
    //         upVotes: 3,
    //         downVotes: 2,
    //         noOfAnswers: 0,
    //         questionTitle: "What is a function?",
    //         questionBody: "It meant to be",
    //         questionTags: ["javascript", "R", "python"],
    //         userPosted: "mano",
    //         askedOn: "jan 1",
    //         userId: 1,
    //         answer: [{
    //             answerBody: "Answer",
    //             userAnswered: 'kumar',
    //             answeredOn: "jan 2",
    //             userId: 2,
    //         }]
    //  }]
    const location = useLocation()
    
        
    
    return (
    <div className='main-bar'>
        <div className='main-bar-header'>
            {
             location.pathname === '/'? <h1>Top Questions</h1>:<h1>All Questions</h1>
            }
        
            <button onClick={checkAuth}className='ask-btn'>
               Ask Question
            </button>
        </div>
        <div>
              {questionsList.data===null?
                <h1>Loading....</h1>:<><p>{questionsList.data.length} Questions</p>
                <Questionsbar questionsList={questionsList.data}/>
                </>}
        </div>

    </div>
  )
}
export default HomeMainbar;
