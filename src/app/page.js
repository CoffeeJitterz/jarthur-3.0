
import Image from "next/image";
import Card from "@/Components/Card";

export default async function Home({searchParams}) {
  const params = await searchParams;
  const pattern = params.pattern;
  console.log(pattern);
  return (
    <div className={pattern ? `page_${pattern}` : 'page'} > 
            <Image 
            src="/jarthur_logo.png"
            width={650}
            height={600}
            alt="cartoon faces"
            />
            <Card color={"ffd902"}>
              <Image 
              src="/jarthur_slogan.png"
              width={400}
              height={100}
              alt="funny words"
              />
            </Card>
    </div>

  );
}
