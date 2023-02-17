export const setCurrentUser = (data) =>{
    //console.log(data,"at current action")
    return{
        type:'FETCH_CURRENT_USER',
        payload: data
    }
}