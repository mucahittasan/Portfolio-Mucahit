import Link from 'next/link'
import React from 'react'

import { DiGithubBadge } from 'react-icons/di'

const Footer = () => {
    return (
        <footer className='mt-auto text-center py-4 text-sm'>
            <div className='flex justify-center items-center sm:flex-row flex-col'>
                <div className='flex items-center'>
                    <span className='sm:block hidden'>made by</span>
                    <Link className='font-bold mx-3 text-base' target='_blank' href="https://github.com/mucahittasan">👻 <span className=' hover:underline'>Mucahit Tasan</span></Link>
                </div>
                -
                <Link target='_blank' className='font-bold mx-3 text-base flex items-center text-gray-400 dark:text-gray-500 hover:underline' href="https://github.com/mucahittasan/Portfolio-Mucahit">
                    <DiGithubBadge className='inline-block text-2xl mr-2 text-darkText dark:text-gray-500' />
                    <span>Source Code</span>
                </Link>
            </div>
        </footer>
    )
}

export default Footer