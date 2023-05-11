
import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { PostMetadata } from '@/actions/getAllBlog'
import { formatDate } from '@/hooks/useFormatDate'

import { IoTimeOutline } from 'react-icons/io5'
import { AiOutlineCalendar } from 'react-icons/ai'

interface BlogCardProps {
    blog: PostMetadata;
    time: number;
}

const BlogCard: FC<BlogCardProps> = ({ blog, time }) => {
    return (
        <Link href={`/blog/${blog.slug}`}>
            <div className="relative w-full rounded-lg overflow-hidden group md:max-w-none md:h-[200px]">
                <Image
                    className="object-cover transition-all !relative duration-200 group-hover:scale-110 h-full"
                    fill
                    alt={blog.title}
                    src={blog.cover_image}
                />
            </div>
            <article>
                <h2 className='text-2xl font-bold my-4 transition-all hover:gradient-text dark:hover:gradient-dark-text'>{blog.title}</h2>
                <div className='flex items-center gap-x-8  text-gray-400 dark:text-gray-500 font-medium'>
                    <div className='flex items-center gap-x-2'><IoTimeOutline /><span>{time} min.</span></div>
                    <div className='flex items-center gap-x-2'>
                        <span><AiOutlineCalendar /></span>
                        <span>{formatDate(blog.date)}</span>
                    </div>
                </div>

            </article>
        </Link>
    )
}

export default BlogCard