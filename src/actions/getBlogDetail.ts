import fs from 'fs'
import matter from 'gray-matter';

export const getBlogDetail = (slug: string) => {
    const folder = "./src/pages/blog/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};