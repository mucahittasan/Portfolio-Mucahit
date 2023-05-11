import fs from 'fs'
import matter from 'gray-matter';

export interface PostMetadata {
    title: string;
    date: string;
    subtitle: string;
    slug: string;
    cover_image: string;
}

export const getAllBlog = (): PostMetadata[] => {
    const files = fs.readdirSync("./src/pages/blog/");
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each file.
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`./src/pages/blog/${fileName}`, "utf-8");
        const matterResult = matter(fileContents);

        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md", ""),
            cover_image: matterResult.data.cover_image
        }
    });

    return posts;
}