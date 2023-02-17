import React,{useState} from 'react'
import './AskQuestion.css'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate, usenavigate} from 'react-router-dom'
import {askQuestion} from '../../actions/question'

const AskQuestion = () => {

  const dispatch = useDispatch()
  const User = useSelector((state)=>(state.currentUserReducer))
  const navigate =useNavigate()
  
 const [questionTitle, setquestionTitle] = useState('')
 const [ questionBody, setquestionBody] = useState('')
 const [questionTags , setquestionTags] = useState('')
  
 const handelSubmit= (e) => {
   e.preventDefault()
 // console.log({questionTitle,questionBody,questionTags})
   dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted:User.result.name,userId:User.result._id},navigate)) 

}

 const handelEnter=(e)=>{
  if(e.key==='Enter')
  setquestionBody(questionBody+'\n')

 }
 
  return (
    <div className='ask-question'>
        <div className='ask-ques-container'>
          <h1>Ask a public question</h1>
          <form onSubmit={handelSubmit}>
            <div className='ask-form-container'>
               
               
                <label htmlFor="ask-ques-title">
                <h4>Title</h4>
                <p>Be specific and imagine you’re asking a question to another person.</p>
                <input type="text" placeholder='e.g. is there an R function for finding the index of an element in a vector'
                        id = "ask-ques-title" onChange={(e)=>{setquestionTitle(e.target.value)}}/>
                        
                </label>
                
                
                
                <label htmlFor="ask-ques-body">
                <h4>Body</h4>
                <p>Include all the information someone would need to answer your question.</p>
                <textarea id="ask-ques-body" cols="30" rows="10" onChange={(e)=>{setquestionBody(e.target.value)}} onKeyPress={handelEnter}></textarea> 
              
                </label>
                
                
                <label htmlFor="ask-tags">
                <h4>Tags</h4>
                <p>Add upto 5 tags to describe what your question is about.</p>
                <input type="text" placeholder='e.g. (xml javascript react'
                        id = "ask-ques-tags"   onChange={(e)=>{setquestionTags(e.target.value.split(" "))}}/>
                </label>
                
            </div>
            <input type="submit" value="Review your Question" className='review-btn'/>
          </form>
          </div>    
    
    </div>
  )
}

export default AskQuestion