import Image from "next/image";
import Navigation from "@/Components/Navigation";

export default function Home() {
  return (
    <div className="page" > 
            <Image 
            src="/jarthur_logo.png"
            width={650}
            height={600}
            alt="cartoon faces"
            />
            <Navigation />
    </div>
  );
}
