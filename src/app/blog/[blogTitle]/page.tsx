import React from 'react'

import getBlogDetail from '@/actions/getBlogDetail';
import Markdown from 'markdown-to-jsx';
import { formatDate } from '@/hooks/useFormatDate';
import readingTime from 'reading-time';
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoTimeOutline } from 'react-icons/io5';


const BlogDetail = (props: any) => {

    const blogTitle = props.params.blogTitle;
    const blogContent = getBlogDetail(blogTitle);

    const contentReadingTime = readingTime(blogContent.content)

    return (
        <>
            <title>{`Mucahit |  ${blogTitle}`}</title>

            <div>
                <div className='my-12 flex flex-col gap-y-4'>
                    <div className='flex items-center justify-end gap-x-8  text-gray-400 dark:text-gray-500 font-medium'>
                        <div className='flex items-center gap-x-2'><IoTimeOutline /><span>{Math.round(contentReadingTime.minutes)} min.</span></div>
                        <div className='flex items-center gap-x-2'>
                            <span><AiOutlineCalendar /></span>
                            <span>{formatDate(blogContent.data.date)}</span>
                        </div>
                    </div>
                    <h1 className='font-bold text-5xl gradient-text text-center dark:gradient-dark-text'>{blogContent.data.title}</h1>

                </div>
                <article className='prose prose-zinc prose-strong:text-darkText dark:prose-strong:text-whiteText lg:prose-xl text-gray-300 dark:text-gray-600 prose-headings:text-white dark:prose-headings:text-whiteText prose-a:text-white dark:prose-a:text-whiteText prose-blockquote:text-gray-300 dark:prose-blockquote:text-gray-600 prose-li:text-white dark:prose-li:text-whiteText prose-li:font-medium prose-a:font-semibold marker:text-white dark:marker:text-whiteText !text-base max-w-full'>
                    <Markdown className="markdown-content">{blogContent.content}</Markdown>
                </article>
            </div>
        </>
    )
}

export default BlogDetail