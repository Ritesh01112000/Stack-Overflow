import * as api from '../api/index'


export const fetchAllUsers = () => async(dispatch)=>{
    try {
        const {data} =await  api.fetchAllUsers()   
        dispatch( {type:'FETCH_USERS', payload:data})
    } catch (error) {

        console.log(error)
    }
       
}

export const updateProfile = (id,updateData) =>async(dispatch)=>{
    console.log("inside action")
   
    try {
        console.log(id,"lull")
        const {data} = await api.updateProfile(id,updateData)
        console.log(data,"Inside Action page")

        dispatch ({type:'UPDATE_CURRENT_USER', payload: data})
    } catch (error) {
        console.log(error)
    }
}