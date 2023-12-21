import { getAllProjectIds, getProjectData } from "@/lib/projects";
import styles from "./page.module.css";
import Image from "next/image";
// import { useState } from "react";

export default async function Projects() {
    // const [data, setData] = useState([]);


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
