"use client"
import {useState, useEffect} from 'react'

export default function About() {
    return (
      <div className="app">
        <button onClick={() => click("yellow")}>Click Me For Milk</button>
        <h1>Milk</h1>
      </div>
    );
  }