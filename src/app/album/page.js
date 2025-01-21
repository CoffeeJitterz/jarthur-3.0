import Card from "@/Components/Card";

export default async function Album({searchParams}) {

    const params = await searchParams;

    const pattern = params.pattern;
    return (
      <div className={`page_${pattern}`}>
        <Card name={"text"} color={'rgb(255, 217, 2)'}>
          <h1>The Unfinished Album</h1>
          <p>The boys have been labouring for years in the studio, working diligently
            on a currently unfinished but completely realized double lp concept album. 
            The songs are writter. The tones are dialed in. But the time remains unpaid 
            for. It might even be a triple lp. It's shrouded with mystery, but some mysteries
            get solved. </p>
        </Card>        
      </div>
    );
  }