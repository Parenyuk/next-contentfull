import { client } from './../../lib/contentful';
import styles from "./page.module.css";
import {Article} from "@/components/Article";

export default async function Home() {

    const data = await client.getEntries({content_type: 'article'});

    console.log('data', data);

    const formAction = async (formData) => {
        'use server'
        const firstName = await formData.get('firstName')
        console.log('firstName', firstName);
    }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
      Contentful APP
          {
              data.items.map((item: any) => {
                  // eslint-disable-next-line react/jsx-key
                  return <Article data={item} />
              })
          }
          {/*<Article data={data.items} />*/}
          <form action={formAction}>
              <input name={'firstName'} placeholder={'ender name'} />
          </form>
      </div>
    </main>
  );
}
