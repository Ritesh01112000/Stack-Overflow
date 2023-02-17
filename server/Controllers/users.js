import mongoose from 'mongoose'
import User from '../model/Auth1.js'

export const getAllUsers  = async (req,res) =>{
    try {
           const allUsers = await User.find()
           const allUserDetails=[]
           allUsers.forEach(users=>{
              allUserDetails.push({_id: users._id,name: users.name, about: users.about , tags: users.tags, joinedOn: users.joinedOn})
           })
           res.status(200).json(allUserDetails)
        } catch (error) {
        res.status(400).json({message:error.message})
    }
}


// export const updateProfile = async (req,res) =>{
//     console.log("inside controller")
//     const{id:_id} = req.params
//     console.log(_id,"checkin 123")
//     const {name,about,tags}=req.body;
//     //console.log({id,name,about,tags},"checking the serve")
//     if(!mongoose.Types.ObjectId.isValid(_id)){
//         return res.status(404).json('question Unavailable..')
//       }

//     try {
//         const updatedProfle = await User.findByIdAndUpdate(_id,{$set:{'name':name,'about':about,'tags':tags}},{new:true})
//         res.status(200).json (updatedProfle )
//     } catch (error) {
//         res.status(405).json({message:error.message})
        
//     }
// }
export const updateProfile = async (req, res) => {

    const { id: _id } = req.params;
    const { name, about, tags } = req.body;
    console.log(_id,"Id printing")
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...');
    }

    try {
        const updatedProfile = await User.findByIdAndUpdate( _id, { $set: { 'name': name, 'about': about, 'tags': tags }}, { new: true } )
        res.status(200).json(updatedProfile)
    } catch (error) {
        res.status(405).json({ message: error.message })
    }
}