"use client"
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {useState, useEffect} from 'react';

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
    if (pattern < 3) {
      setPattern(pattern + 1)
    } else if (pattern >= 3)
    setPattern(1)
  }

    return (
        <div className="navigation">

            <Link 
            className="link" 
            onClick={() => {click_pattern(pattern); click_color("Blue")}} 
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
            onClick={() => {click_pattern(pattern); click_color("Brown")}} 
            href={{pathname: "/milk",
                    query: {
                        pattern: pattern
                    }
            }}>
            milk</Link>
        </div>

    );
  }