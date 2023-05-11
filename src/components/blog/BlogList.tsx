
import readingTime from "reading-time";

import { getAllBlog } from "@/actions/getAllBlog"
import getBlogDetail from "@/actions/getBlogDetail";


import BlogCard from "./BlogCard";

function BlogList() {

    const blogs = getAllBlog();


    return (
        <section>
            <div className="primary-title">
                <h3 className="select-none">Blogs</h3>
                <h3 className="primary-title-dark">Blogs</h3>
            </div>
            <ul className="grid md:grid-cols-2 grid-cols-1 gap-8 my-12">
                {blogs?.map((blog, index) => {
                    const blogContent = getBlogDetail(blog.slug);
                    const contentReadingTime = readingTime(blogContent.content)

                    return (
                        <li key={index}>
                            <BlogCard
                                blog={blog}
                                time={Math.round(contentReadingTime.minutes)}
                            />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default BlogList