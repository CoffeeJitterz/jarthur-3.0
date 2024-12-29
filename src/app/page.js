"use client"
import Image from "next/image";
import {useState, useEffect} from 'react';

export default function Home() {

  const [pattern, setPattern] = useState("page")

  const click = pattern => {
    setPattern(pattern)
  }
  const josh = "page_1";

  useEffect(() => {
    document.body.style.backgroundImage = pattern
  }, [pattern])

  return (
    <div className={`${pattern}`} > 
            <Image 
            src="/jarthur_logo.png"
            width={650}
            height={600}
            alt="cartoon faces"
            />
            <button onClick={() => {click("page_1")}}>Change Pattern</button>
    </div>
  );
}
