import Image from "next/image";

export default function About() {
  return (
    <div className="page">
        <h1>About</h1>
        <Image 
        src="/1.png"
        width={450}
        height={600}
        alt="wedding photo"
        />
    </div>
  );
}