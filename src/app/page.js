"use client"
import Image from "next/image";
import {useState, useEffect} from 'react';

export default function Home() {

  const [pattern, setPattern] = useState(1)

  const click = pattern => {
    if (pattern < 3) {
      setPattern(pattern + 1)
    } else if (pattern >= 3)
    setPattern(1)
    console.log(pattern)
  }

  return (
    <div className={`page_${pattern}`} > 
            <Image 
            src="/jarthur_logo.png"
            width={650}
            height={600}
            alt="cartoon faces"
            />
            <button onClick={() => {click(pattern)}}>Change Pattern</button>
    </div>
  );
}
