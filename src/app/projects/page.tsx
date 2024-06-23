import { getAllProjectIds, getProjectData } from "@/lib/projects";
import styles from "./page.module.css";
import Image from "next/image";
import NoSSR from "@/components/NoSSR";
import Link from "next/link";
import truncate from "html-truncate";

export default async function Projects() {

    const projects = getAllProjectIds();
    return (
        <div className={styles.container}>
            <h1>Projects</h1>
            <NoSSR><ul className={styles.cards}>
                {projects.map(async (project, index) => {
                    const data: any = await getProjectData(project.params.id);
                    const previewHTML: String = truncate(data.rawHTML, 310, {ellipsis: '...'});
                    return (
                        <Link href={`/projects/${project.params.id}`} className={styles.card} key={index}>
                            <h2>{data.title}</h2>
                            <Image 
                                src={`/projects/images/${data.thumbnail}`} 
                                width={0} 
                                height={0} 
                                sizes="100vw" 
                                style={{width: "100%", height: "auto"}}
                                alt={data.thumbnail} />
                            <p dangerouslySetInnerHTML={{ __html: previewHTML }} />
                        </Link>
                )})}
            </ul></NoSSR>
        </div>
    )
}
