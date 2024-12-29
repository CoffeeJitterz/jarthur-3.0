"use client"
import Link from "next/link";
import {useState, useEffect} from 'react';

export default function Navigation() {
  const [color, setColor] = useState("Blue");

  const click = color => {
    setColor(color)
  }

  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

    return (
        <div className="navigation">
            <Link onClick={() => click("yellow")} href={"/"}>Home</Link>
            <Link onClick={() => click("Green")} href={"/about"}>About</Link>
            <Link onClick={() => click("Red")} href={"/milk"}>milk</Link>
            <button>Change Pattern</button>
        </div>

    );
  }