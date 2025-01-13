import React from 'react'
import Image from 'next/image'

const drawings = [{
  id:"1", 
  title:"crazy caves", 
  description: "that was a crazy part of the cave", 
  image: "/images/1.jpg"
},
                  {
  id:"2", 
  title:"wild caves", 
  description: "that was a wild part of the cave", 
  image: "/images/2.jpg"
}]


function drawingPage({params}) {

const drawingRender = drawings.map(drawing => {if(drawing.id === params.id) 
  {return <div key={drawing.id}>
    <h1>{drawing.title}</h1>
    <h2>{drawing.description}</h2>
    <h3>{drawing.image}</h3>
    <Image 
            src={drawing.image}
            width={600}
            height={600}
            alt="cartoon faces"
            />
    </div>}})

  return (
    <div>
      {drawingRender}
    </div>
  )
}

export default drawingPage
