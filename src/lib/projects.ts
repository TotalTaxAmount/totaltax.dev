import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { unified } from "unified";

const projectsPath = path.join(process.cwd(), 'public/projects');

export function getAllProjectIds() {
    const files = readdirSync(projectsPath, { withFileTypes: true});

    return files.filter(file => file.isFile()).map((file) => {
        return {
            params: {
                id: file.name.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getProjectData(id: string) {
    const fullPath = path.join(projectsPath, `${id}.md`);
    const fileContents = readFileSync(fullPath, 'utf-8');

    const matterRes = matter(fileContents);

    const remarkRes = await unified()
        .use(remarkParse)
        .use(remarkHtml)
        .process(matterRes.content);
    const rawHTML = remarkRes.toString();

    return {
        id,
        rawHTML,
        ...matterRes.data,
    };
}