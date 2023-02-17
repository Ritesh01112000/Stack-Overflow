const authReducer = (state={data:null},action)=>{

    switch(action.type){
       case 'AUTH':
      localStorage.setItem('Profile' , JSON.stringify({ ...action.data}))   //removed questuon mark after action
    
      return {...state,data: action.data}                            //removed questuon mark after action
    
        default:
            
            return state;
    }
     
} 
export default authReducer