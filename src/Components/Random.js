
import React from 'react'
import Link from 'next/link';

export default function Random() {
const randomnumber = () => {
    const number = Math.floor(Math.random() * 5);
    if (number) {return number}
    else {return 1}
}
  return (
    <button className='random'>
        <Link
        href={`/drawings/${randomnumber()}`}
        >Random</Link>
    </button>
  )
}
