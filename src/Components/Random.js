
import React from 'react'
import Link from 'next/link';

export default function Random() {
const randomnumber = () => {
    const number = Math.floor(Math.random() * 10);
    return number
}
  return (
    <button>
        <Link
        href={`/drawings/${randomnumber()}`}
        >Random</Link>
    </button>
  )
}
