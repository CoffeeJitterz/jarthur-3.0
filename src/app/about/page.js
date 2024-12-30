import Image from "next/image";

export default async function About({searchParams}) {

const pattern = await searchParams.pattern
console.log(pattern)
  return (
    <div className={`page_${pattern}`}>
        <h1 className="about_header">About</h1>
        <Image 
        src="/1.png"
        width={450}
        height={600}
        alt="wedding photo"
        />
    </div>
  );
}