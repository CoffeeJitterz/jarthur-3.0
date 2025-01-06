import React from 'react'
import Image from 'next/image'

const drawings = [{id:"poop", title:"crazy caves", description: "that was a crazy part of the cave", image: "/jarthur_logo.png"},
                  {id:"pee", title:"wild caves", description: "that was a wild part of the cave", image: "/1.png"}]


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
