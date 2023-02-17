import React from 'react'

const WidgetTags = () => {
  const tags=['c','css','express','firebase','html','java','javascript','reactjs','mysql','node.js','php','mongodb'];

  return (
    <div className='widget-tags'>
      <h3>Watched tags</h3>
      <div className='widget-tags-div'>
        {
          tags.map((tag)=>(
             <p key={tag}>{tag}</p>
          ))
        }
      </div>
    </div>
  )
}
export default WidgetTags;