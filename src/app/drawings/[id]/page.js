import React from 'react'
import Image from 'next/image'
import drawings from '@/Data/drawings'
import Random from '@/Components/Random'


function drawingPage({params}) {

const drawingRender = drawings.map(drawing => {if(drawing.id === params.id) 
  {return <div className="drawings" key={drawing.id}>
    <h1>{drawing.title}</h1>
    <h2>{drawing.description}</h2>
    <h3>{drawing.image}</h3>
    <Image 
            src={drawing.image}
            width={600}
            height={750}
            alt="cartoon faces"
            />
            <Random />
    </div>}})

  return (
    <div>
      {drawingRender}
    </div>
  )
}

export default drawingPage
