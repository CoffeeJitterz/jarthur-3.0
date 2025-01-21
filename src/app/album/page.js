
export default async function Album({searchParams}) {

    const params = await searchParams;

    const pattern = params.pattern;
    return (
      <div className={`page_${pattern}`}>
        <h1>The Unfinished Album</h1>
      </div>
    );
  }