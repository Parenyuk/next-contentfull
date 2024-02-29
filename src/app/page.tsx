import { client } from '@/lib/contentful';
import {Article} from "@/src/shared/components/Article";

export default async function Home() {

    const data = await client.getEntries({content_type: 'article'});

    console.log('data', data);



  return (
    <main>
      <div>
      Contentful APP
          {
              data.items.map((item: any) => {
                  // eslint-disable-next-line react/jsx-key
                  return <Article data={item} />
              })
          }
      </div>
    </main>
  );
}
