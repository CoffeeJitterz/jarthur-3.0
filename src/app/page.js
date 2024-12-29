"use client"
import Image from "next/image";
import {useState, useEffect} from 'react';
import Navigation from "@/Components/Navigation";

export default function Home() {

  // const [color, setColor] = useState("Blue");

  // const click = color => {
  //   setColor(color)
  // }

  // useEffect(() => {
  //   document.body.style.backgroundColor = color
  // }, [color])
  return (
    <div className="page" > 
            <Image 
            src="/jarthur_logo.png"
            width={650}
            height={600}
            alt="cartoon faces"
            />
            {/* <Navigation /> */}
            <button onClick={() => click("yellow")}>Change Color</button>
    </div>
  );
}
