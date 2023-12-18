import { getAllProjectIds, getProjectData } from "@/lib/projects"
import Layout from '../../layout';
import styles from './page.module.css';

export default async function Project({ params }: { params: any}) {
    const data: any = await getProjectData(params.id);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{data.title}</h1>
            <br />
            <div className={styles.content} dangerouslySetInnerHTML={{__html: data.rawHTML}} />
        </div>

    );
}

export async function getStaticPaths() {
    const paths = getAllProjectIds();

    return {
        paths,
        fallback: false,
    };
}