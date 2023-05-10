import React from 'react'

import getBlogDetail from '@/actions/getBlogDetail';
import Markdown from 'markdown-to-jsx';


const BlogDetail = (props: any) => {

    const blogTitle = props.params.blogTitle;
    const blogContent = getBlogDetail(blogTitle);

    return (
        <>
            <title>{`Mucahit |  ${blogTitle}`}</title>

            <div>
                <h1>{blogContent.data.title}</h1>
                <Markdown className="markdown-content">{blogContent.content}</Markdown>
            </div>
        </>
    )
}

export default BlogDetail