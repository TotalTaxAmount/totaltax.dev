import { getAllProjectIds, getProjectData } from "@/lib/projects";
import styles from "./page.module.css";
import Image from "next/image";

export default async function Projects() {


    return (
        <div className={styles.container}>
            <ul className={styles.projects}>
                {/* {projects.map((project, index) => {
                    const data: any = getProjectData(project.params.id);
                    return (
                        <li key={index} className={styles.project}>
                            <Image 
                                src={`/projects${data.image}`} 
                                width={0} 
                                height={0} 
                                sizes="100vw" 
                                style={{width: "50%", height: "auto"}}
                                alt={data.image}/>
                        </li>
                )})} */}
            </ul>
        </div>
    )
}
