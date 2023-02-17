import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../model/Auth1.js'

export const signup = async (req, res)=>{


 
     const { name , email , password }  = req.body;
       
     try{
              
            const existinguser = await users.findOne({ email });
            if(existinguser){
                 return res.status(404).json({message:"User already Exist."})
             }
             const hashedPassword = await bcrypt.hash(password,12)
             const newUser = await users.create({name, email , password: hashedPassword})
             //const token = jwt.sign({email: newUser.email , id:newUser._id},"test",{explainedIn: '1h'});
      
             return res.status(200).json({result:newUser})  
      
         } catch(error){
        res.status(500).json("something went wrong....here") 
     } 
}


export const login = async (req,res)=>{
      const { email, password} = req.body;
      try{
         const existinguser = await users.findOne({email});
          if(!existinguser){
             return res.status(404).json({message: "User dont Exist."})
          } 
          const isPaswwordCrt = await bcrypt.compare(password,existinguser.password)
          if(!isPaswwordCrt){
            return res.status(400).json({message :"invalid credentials"})
          }
        const token = jwt.sign({email: existinguser.email, id:existinguser._id},"test", {expiresIn:'1h'})
        
          return res.status(200).json({result:existinguser,token})
       

      } catch(error){
            res.status(500).json("Something went wrong...")
      }
}