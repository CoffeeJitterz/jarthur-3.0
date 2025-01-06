import React from 'react'
import Image from 'next/image'

const test = "/jarthur_logo.png"

function page() {
  return (
    <div>
        <Image 
        src={test}
        width={500}
        height={500}
        alt='poop'/>
    </div>
  )
}

export default page