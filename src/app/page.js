import Image from "next/image";

export default function Home() {
  return (
    <div className="page" > 
            <Image 
            src="/jarthur_logo.png"
            width={650}
            height={600}
            alt="cartoon faces"
            />
    </div>
  );
}
