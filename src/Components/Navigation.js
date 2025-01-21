"use client"
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {useState, useEffect} from 'react';
import Card from "./Card";

export default function Navigation() {
    
  const [color, setColor] = useState("#ffe69d");
  const click_color = color => {
    setColor(color)
  }
  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  const [pattern, setPattern] = useState(1)
  const click_pattern = pattern => {
    if (pattern < 11) {
      setPattern(pattern + 1)
    } else if (pattern >= 11)
    setPattern(1)
  }

    return (
        <div className="navigation">

<Link 
className="link" 
onClick={() => {click_pattern(pattern); click_color("rgb(255, 230, 157)")}} 
href={{
    pathname:"/",
    query: {
        pattern: pattern
    }}}>
Home</Link>
<Link 
className="link" onClick={() => {click_pattern(pattern); click_color("Yellow")}} 
href={{
    pathname: "/about",
    query: {
        pattern: pattern
    }}}>
About</Link>
<Link 
className="link" 
onClick={() => {click_pattern(pattern); click_color("Teal")}} 
href={{pathname: "/album",
        query: {
            pattern: pattern
        }
}}>
The Unfinished Album</Link>
</div>



    );
  }