import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from 'remark-html';

const projectsPath = path.join(process.cwd(), 'public/projects');

export function getAllProjectIds() {
    const files = readdirSync(projectsPath);

    return files.map((fName) => {
        return {
            params: {
                id: fName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getProjectData(id: string) {
    const fullPath = path.join(projectsPath, `${id}.md`);
    const fileContents = readFileSync(fullPath, 'utf-8');

    const matterRes = matter(fileContents);

    const remarkRes = await remark()
        .use(html)
        .process(matterRes.content);
    const rawHTML = remarkRes.toString();

    return {
        id,
        rawHTML,
        ...matterRes.data,
    };
}