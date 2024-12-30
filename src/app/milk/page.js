
export default async function About({searchParams}) {

    const params = await searchParams;

    const pattern = params.pattern;
    return (
      <div className={`page_${pattern}`}>
        <h1>Milk</h1>
      </div>
    );
  }