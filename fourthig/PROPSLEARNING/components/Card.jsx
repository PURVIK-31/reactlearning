import React from 'react'

function card({text}) {
  return (
    
    <div >
       <button style={{backgroundColor: 'lightpink', color: 'white', margin: '1px', display: 'flex'}}>
        {text}
       </button>
    </div>
    
  )
}

export default card
