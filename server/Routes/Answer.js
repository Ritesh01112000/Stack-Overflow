import express from 'express'
import {postAnswer,deleteAnswer} from '../Controllers/Answers.js'


const router = express.Router()

//patch -  as we are appending on to the existing data
router.patch('/post/:id',postAnswer)  //here id the the id which is written in url of the browser when the question is open
router.patch('/delete/:id',deleteAnswer)
export default router;