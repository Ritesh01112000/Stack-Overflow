import React,{useState} from 'react'
import { useParams , useNavigate,useLocation} from 'react-router-dom'
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import './QuestionDetails.css'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswers from './DisplayAnswers'
import {useSelector,useDispatch} from 'react-redux'
import {postAnswer,deleteQuestion, voteQuestion} from '../../actions/question'
import moment from 'moment'
import copy from 'copy-to-clipboard'


const QuestionDetails = () => {

  const {id} = useParams()
  

  const questionsList = useSelector(state => state.questionsReducer)
    
  
    // var questionsList = [{ 
    //        _id:"1",
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
    //         _id: "2",
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
    //         _id: "3",
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
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const [Answer ,setAnswer] =useState()
    const User = useSelector((state) => (state.currentUserReducer))
    const location = useLocation()
    const url = 'http://localhost:3000'


    const handlePosAns=(e,answerLenght)=>{
          e.preventDefault();
          if(User === null){
            alert("Login or Sinup to answer a question")
            Navigate('/Auth')
          }else{
            if(Answer ===''){
            alert('Enter an answer before submitting')
          }else{
            dispatch(postAnswer({id,noOfAnswers: answerLenght+1 ,answerBody:Answer,userAnswered:User.result.name, userId:User.result._id}))
          }
         }
    
         }


    const handleShare=()=>{
        copy(url+location.pathname)
        alert("Copied url:"+url+location.pathname)
    }

   const handleDelete=()=>{
      dispatch(deleteQuestion(id,Navigate))
   }

   const handleUpVote=()=>{
    dispatch(voteQuestion(id,'upVote', User.result._id))
   }
   const handleDownVote=()=>{
    dispatch(voteQuestion(id,'downVote', User.result._id))
   }

  return (
    <div className='question-details-page'>
       {
        questionsList===null?
        <h1>Loading....</h1>:
        <> 
          {
            questionsList.data.filter(question =>question._id === id).map(question=>(
             <div className='' key ={question._id}>
           
                  <section className='question-details-container'>
                     <h1>{question.questionTitle}</h1>
                     <div className='question-details-container-2'>
                            
                            <div className='question-votes'>
                                <img src={upvote} alt="" width="18" className='.votes-icon' onClick={handleUpVote}/>
                                <p>{question.upVote.length - question.downVote.length}</p>
                                <img src={downvote} alt="" width="18" className='.votes-icon' onClick={handleDownVote}/>
                                
                            </div>
                          
                            <div style={{width:"100%"}}>
                                <p className='question-body'>{question.questionBody}</p>
                                <div className='question-details-tags' >
                                    {
                                        question.questionTags.map((tag)=>(
                                             <p key={tag}>{tag}</p>
                                        ))
                                    }
                                </div>
                                <div className='question-actions-user'>
                                   <div>
                                      <button type="button" onClick={handleShare}>Share</button>
                                    
                                        
                                      {
                                        User.result._id === question.userId && (
                                          <button type="button" onClick={handleDelete}>Delete</button>
                                        )
                                      }
                                      
                               
                                   </div>
                                   <div>
                                       <p>asked {moment(question.askedOn).fromNow()}</p>
                                       <Link to={`/User/${question.userId}`} className='user-link' style={{color:"#0086d8"}}>
                                        <Avatar backgroundColor="Orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                        <div>
                                           {question.userPosted}
                                        </div>
                                       </Link>
    
                                    </div>
                                </div>
                            </div>

                     </div>

                  </section>
               {
                question.noOfAnswers !==0 && (
                      <section>
                        <h3>{question.noOfAnswers} answers</h3>
                        <DisplayAnswers key ={question._id} question={question} handleShare={handleShare}/>
                      </section>
                )
               }
                <section className='post-ans-container'>
                  <h3>Your Answer</h3>
                  <form onSubmit={(e)=>{handlePosAns(e,question.answer.length)}}>
                    <textarea name="" cols="30" rows="10"  onChange={(e)=>setAnswer(e.target.value)}></textarea>
                    <br/>
                    <input type="submit" className='post-ans-btn' value="Post Your Answer"></input>
                  </form>
                 <p>
                    Browse other question  tagged
                    {
                        question.questionTags.map((tag)=>(
                            <Link to='/Tags' key={tag} className="ans-tags"> {tag} </Link>
                        
                            ))
                    }  or 
                    <Link to='/AskQuestion' style={{textDecoration:"none", color:"#009dff"}}>Ask your own Question</Link>
                 </p>  
                </section>   
               

             </div>   
            ))
        }
        </>
       }
     
    </div>
  )
}

export default QuestionDetails