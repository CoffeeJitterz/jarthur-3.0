import React from 'react'

function page({params}) {

const drawings = [{id:"poop", title:"crazy caves", description: "that was a crazy part of the cave"},
                  {id:"pee", title:"wild caves", description: "that was a wild part of the cave"}];
const drawingRender = drawings.map(drawing => {})

  return (
    <div>
      {params.id}
      <h1>{drawings[1].id}</h1>
      <h1>{drawings[1].title}</h1>
      <h3>{drawings[1].description}</h3>
    </div>
  )
}

export default page
