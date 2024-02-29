import {Article} from "@/src/shared/components/Article";
import {client} from "@/lib/contentful";

export default async function HomePage () {

    const data = await client.getEntries({content_type: 'article'});

    console.log('data', data);

    return (
        <div>
            Contentful APP
            {
                data.items.map((item: any) => {
                    // eslint-disable-next-line react/jsx-key
                    return <Article data={item} />
                })
            }
        </div>
    )
};
