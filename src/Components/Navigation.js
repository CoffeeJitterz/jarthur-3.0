"use client"
import Link from "next/link";
import {useState, useEffect} from 'react';

export default function Navigation() {
  const [color, setColor] = useState("#ffe69d");

  const click = color => {
    setColor(color)
  }

  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

    return (
        <div className="navigation">

            <Link className="link" onClick={() => click("#ffe69d")} href={"/"}>Home</Link>
            <Link className="link" onClick={() => click("#94ce88")} href={"/about"}>About</Link>
            <Link className="link" onClick={() => click("#c565a3")} href={"/milk"}>milk</Link>
        </div>

    );
  }