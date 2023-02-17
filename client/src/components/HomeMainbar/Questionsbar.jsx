import React from 'react'
import './HomeMainbar'
import {Link} from 'react-router-dom'
import moment from 'moment'

const Questionsbar = ({questionsList}) => {
 
  return (
    <div>
     


   {/* {     questionsList.map((user) => (
        <div className="user">{user.questionTitle}</div>
      ))} */}
    <div className=''>
    <div className=''>
        {     questionsList.map((question) => (

              <div className='display-question-container'>
               
                 <div className='display-votes-ans'>
                   <p>{question.upVote.length-question.downVote.length}</p>
                   <p>votes</p>
                  
                 </div> 
               
               
                <div className='display-votes-ans'>
                 <p>{question.noOfAnswers}</p>
                 <p>answers</p>
                 </div>
               
               
                 
                  <div className='display-question-details'>
                  
                    <Link to ={`/Questions/${question._id}`} className="question-title-link" >{question.questionTitle}</Link>  
                  
                   <div className='display-tag-time'>
                     <div className='display-tag'>
                        {
                        question.questionTags.map((tag) => (
                           <p key={tag}>{tag}</p>))
                        }
                       </div>
                       <p className='display-time'>asked {moment(question.askedOn).fromNow()} {question.userPosted}</p>
                    </div>
                  </div>
              </div>


           
     )     
   )}
  </div>
  </div>
          </div> 
          )
        }

export default Questionsbar