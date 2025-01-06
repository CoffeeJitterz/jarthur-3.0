import React from 'react'

function page({params}) {


const drawings = [{id:"poop", title:"crazy caves", description: "that was a crazy part of the cave"},
                  {id:"pee", title:"wild caves", description: "that was a wild part of the cave"}]
const drawingRender = drawings.map(drawing => {if(drawing.id === params.id) {return <div><h1>{drawing.title}</h1><h2>{drawing.description}</h2></div>}})

  return (
    <div>
      {drawingRender}
    </div>
  )
}

export default page
