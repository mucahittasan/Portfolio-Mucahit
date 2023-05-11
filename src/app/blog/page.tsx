import BlogList from '@/components/blog/BlogList'
import React from 'react'

export const metadata = {
    title: 'Mucahit | Blog',
    description: 'Mucahit tasan portfolio blog page',
}

const Blog = () => {
    return (
        <div className='mt-20'>
            <BlogList />
        </div>
    )
}

export default Blog