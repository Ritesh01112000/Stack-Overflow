import axios from  'axios'

const API = axios.create({baseURL:'http://localhost:5000'})


export const logIn = (authData) => API.post('/user/login',authData)
export const signUp = (authData) => API.post('/user/SignUp',authData)
export const postQuestion = (questionData)=> API.post('/questions/Ask',questionData)
export const getAllQuestions = () => API.get('./questions/get')
export const postAnswer = (id,noOfAnswers , answerBody, userAnswered,userId) => API.patch(`/answer/post/${id}`,{id,noOfAnswers , answerBody, userAnswered, userId})
export const deleteQuestion = (id) => API.delete(`questions/delete/${id}`)
export const deleteAnswer = (id,answerId, noOfAnswers) =>API.patch(`/answer/delete/${id}`,{answerId, noOfAnswers})
export const voteQuestion = (id,value, userId) =>API.patch(`/questions/vote/${id}`,{value,userId})
export const fetchAllUsers = () => API.get('/User/getAllUsers')
export const updateProfile = (id,updateData) => API.patch(`/user/update/${id}`,updateData)