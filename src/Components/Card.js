import React from 'react'

function Card(props) {
  
  return (
    <div className='card' style={{backgroundColor:`${props.color}`}}>
      {props.children}
    </div>
  )
}

export default Card