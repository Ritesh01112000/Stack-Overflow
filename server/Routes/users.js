import express from 'express'
import {signup, login } from '../Controllers/Auth.js'
import {getAllUsers,updateProfile} from '../Controllers/users.js'

const router = express.Router();

router.post('/signup',signup)

router.post('/login',login)

router.get('/getAllUsers',getAllUsers)

router.patch('/update/:id',updateProfile)


export default router;