import fs from 'fs'
import matter from 'gray-matter';

export default function getBlogDetail(slug: string) {

    const folder = "./src/pages/blog/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf-8");
    const matterResult = matter(content);

    return matterResult;
}