import Questions from '../model/Questions.js'
import mongoose from 'mongoose'




export const AskQuestion = async (req, res) => {
    const postQuestionData = req.body;
    const userId = req.userId;
    const postQuestion = new Questions({...postQuestionData});
    try {
        await postQuestion.save();
        res.status(200).json("Posted a question successfully")
    } catch (error) {
        console.log(error)
        res.status(409).json("Couldn't post a new question")        
    }
}



export const getAllQuestions = async (req,res) =>{
    try {
        const questionList  =  await Questions.find();
        res.status(200).json(questionList);
        
    } catch (error) {
        res.status(404).json({message:error.message})
    }

}

export  const deleteQuestion = async (req,res) => {
    const {id:_id} = req.params
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).json('question Unavailable..')
    }
    try {
        await Questions.findByIdAndDelete(_id);
        res.status(200).json({message:"deleted successfull"})           
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}


export const voteQuestion = async(req,res) =>{
    const {id: _id} = req.params;
    const {value,userId} =req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).json('question Unavailable..')
    }
    try {
       // const question = await Questions.findById(_id)
       // constupIndex = question.upVote.findIndex((ID)=>)

        const question = await Questions.findById(_id)
        const upIndex = question.upVote.findIndex((id) => id === String(userId))
        const downIndex = question.downVote.findIndex((id) => id === String(userId))

        if(value === 'upVote'){
            if(downIndex !== -1){
                question.downVote = question.downVote.filter((id) => id !== String(userId))
            } 
            if(upIndex === -1){
                question.upVote.push(userId)
            }else{
                question.upVote = question.upVote.filter((id) => id !== String(userId))
            }
        }
        else if(value === 'downVote'){
            if(upIndex !== -1){
                question.upVote = question.upVote.filter((id) => id !== String(userId))
            } 
            if(downIndex === -1){
                question.downVote.push(userId)
            }else{
                question.downVote = question.downVote.filter((id) => id !== String(userId))
            }
        }
        await Questions.findByIdAndUpdate( _id, question )
        console.log("Voting successful")
        res.status(200).json({ message: "voted successfully..."})
    } catch (error) {
        res.status(404).json({ message: "id not found"})
    }
    
        
    


}




// export const AskQuestions = async (req,res) => {
   
//     const postQuestionData = req.body;
//     console.log(postQuestionData, "checking server")
//     const userId = req.userId;
//     console.log(userId, "user ID")
//     const postQuestion = new Questions({...postQuestionData, userId})
//     try{
//         await postQuestion.save();
//      return res.status(200).json("Posted a Question successfully")
//      }
//      catch(err){
//         console.log(err ,"problem is here")
//         res.status(409).json("couldnt post a new question")
//      }
// }

