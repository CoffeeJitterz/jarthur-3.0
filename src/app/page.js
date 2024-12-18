import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div >
      <h1>Home</h1>
      <Image 
      src="/1.png"
      width={450}
      height={600}
      alt="wedding photo"
      />
    </div>
  );
}
