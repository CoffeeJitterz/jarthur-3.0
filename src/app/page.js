
import Image from "next/image";
import Card from "@/Components/Card"


export default async function Home({searchParams}) {

  const params = await searchParams;
  const pattern = params.pattern;

  return (
    <div className={`page_${pattern}`} > 
            <Card color={"Yellow"}>
            <Image 
            src="/jarthur_logo.png"
            width={650}
            height={600}
            alt="cartoon faces"
            />
            </Card>
    </div>

  );
}
