"use client"
import {useState, useEffect} from 'react'

export default function About() {

const [color, setColor] = useState("blue");

const click = color => {
    setColor(color)
}

useEffect(() => {
    document.body.style.backgroundColor = color
}, [color])


    return (
      <div className="app">
        <button onClick={() => click("yellow")}>Click Me For Milk</button>
        <h1>Milk</h1>
      </div>
    );
  }