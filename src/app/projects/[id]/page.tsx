import { getAllProjectIds, getProjectData } from "@/lib/projects";
import styles from './page.module.css';
import Image from "next/image";

export default async function Project({ params }: { params: any}) {
    const data: any = await getProjectData(params.id);
    console.log(`/projects${data.image}`)

    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{data.title}</h1>
            <br />
            <Image src={`/projects${data.image}`} width={0} height={0} sizes="100vw" style={{ width: '50%', height: 'auto'}} alt={data.image} />
            <br />
            <div className={styles.content} dangerouslySetInnerHTML={{__html:  data.rawHTML }} />
        </div>

    );
}