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
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/milk"}>milk</Link>
        </div>

    );
  }