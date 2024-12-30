import Image from "next/image";

export default async function About({searchParams}) {

const params = await searchParams;
const pattern = params.pattern; 

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