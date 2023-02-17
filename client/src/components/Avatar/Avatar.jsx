 import React from 'react'

const Avatar=({children, backgroundColor,px,py,color,borderRadius,fontSize,cursor})=>{     //sent as props  , the children contain the stuff written between tag in the navbar file
       
    const style = {
                    backgroundColor,
                    padding: `${px} ${py}`,
                    color:color || 'black',    //if colour is provided in props then we will use them otherwise default value black
                    borderRadius,              //Object of styles received in the props are made "style" and given into the inline CSS
                    fontSize,
                    textAlign:'center',
                    cursor:cursor || 'pointer',
                    textDecoration:"none"  

                 }
    return(
     <div style={style}>                                
       {children}                        
    </div> 
    )
}
export default Avatar;