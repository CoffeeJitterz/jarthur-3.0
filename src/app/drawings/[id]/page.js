import React from 'react'

function page({params}) {

const drawings = [{title:"crazy caves", description: "that was a crazy part of the cave"},
                  {title:"wild caves", description: "that was a wild part of the cave"}];

  return (
    <div>
      {params.id}
      <h1>{drawings[1].title}</h1>
      <h3>{drawings[1].description}</h3>
    </div>
  )
}

export default page
