'use client'
import Image from "next/image";

export const Article = ({data}: any) => {

    const { fields } = data;
    // console.log('DATA', data);
    // console.log('d', data.data.items[0].fields.media.fields);
    console.log('data', fields.media.fields.file.url);

    // const ContentfulImage = props => {
    //     return <Image alt={props.alt} {...props} />
    // }

    const https = 'https:'

    return (<div>
        <h1>{fields.title}</h1>
        {/*<p>{fields.descriptionBody.content}</p>*/}
    <Image src={`${https}${fields.media.fields.file.url}`} alt={'124'} width={300} height={300} />
    {/* <ContentfulImage />*/}

    </div>)
};
