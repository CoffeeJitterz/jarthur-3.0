import React from 'react'

function Card(props) {
  
  return (
    <div className={`${props.name}`} style={{backgroundColor:`${props.color}` }}>
      {props.children}
    </div>
  )
}

export default Card