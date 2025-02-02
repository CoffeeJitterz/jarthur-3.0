
import Image from "next/image";
import Card from "@/Components/Card";
import Random from "@/Components/Random";


export default async function Home({searchParams}) {
  const params = await searchParams;
  const pattern = params.pattern;
  console.log(pattern);
  return (
    <div className={pattern ? `page_${pattern}` : 'page'} > 
    <div className="big">
            <Image 
            src="/jarthur_logo.png"
            width={650}
            height={600}
            alt="cartoon faces"
            />
            <Card  name={'slogan'} color={'rgb(255, 217, 2)'}>
              <Image 
              src="/jarthur_slogan.png"
              width={400}
              height={100}
              alt="funny words"
              />
            </Card>
            <Random />
    </div>
    </div>

  );
}
