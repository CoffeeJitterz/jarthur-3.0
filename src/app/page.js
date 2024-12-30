
import Image from "next/image";


export default async function Home({searchParams}) {

  const pattern = await searchParams.pattern;

  return (
    <div className={`page_${pattern}`} > 
            <Image 
            src="/jarthur_logo.png"
            width={650}
            height={600}
            alt="cartoon faces"
            />
    </div>
  );
}
