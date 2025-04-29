'use client'

import Link from 'next/link'
import { HiCursorClick } from 'react-icons/hi'
import { motion as m } from 'framer-motion'
import Lottie from 'lottie-react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import animationData from '../../public/animations/coderr.json'

const HomePage = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="mt-16"
    >
      <div className="flex flex-col items-start">
        <m.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="home-title gradient-text">
            Hi, I&apos;m Mucahit Tasan
          </h2>
        </m.div>

        <m.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="home-paragraph"
        >
          I&apos;m a{' '}
          <span className="text-pinkColor font-bold">
            Senior Frontend Engineer
          </span>{' '}
          with 5+ years of experience in developing high-performance web
          applications and interactive user interfaces. I specialize in the
          React ecosystem with expertise in building scalable frontend
          architectures. I have a strong background in modern JavaScript
          frameworks and responsive design principles, complemented by hands-on
          experience with gaming-related web applications.
        </m.p>

        <m.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="home-paragraph mt-4"
        >
          My technical expertise includes: <span>HTML</span>, <span>CSS</span>{' '}
          (Sass, Bootstrap, Tailwind CSS), <span>JavaScript</span> (ES6+, ES7+),{' '}
          <span>React</span> (React-Router, Formik, Yup, Redux Toolkit, Context
          API, Zustand), <span>React Native</span>, <span>TypeScript</span>,{' '}
          <span>Next.js</span> (SSR/SSG, NextAuth, Nuqs, Zod, TanStack Query),{' '}
          <span>Node.js</span> (Express.js), <span>MongoDB</span>,{' '}
          <span>Prisma</span>, <span>Drizzle</span>, <span>Supabase</span>,{' '}
          <span>Figma</span>, <span>Storybook</span>, and <span>Photoshop</span>
          .
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
          className="flex items-center mt-12"
        >
          <Link
            className="btn btn-primary"
            href="https://drive.google.com/file/d/1kaVcOz2Svg4ViIev-bNDcHsjI16KbPCy/view?usp=sharing"
            target="_blank"
          >
            <HiCursorClick />
            <span>Resume</span>
          </Link>
          <div className="flex items-center justify-end text-3xl gap-x-1 ml-8">
            <Link
              href={'https://github.com/mucahittasan'}
              target="_blank"
              className="p-2 hover:text-[#d1d1d1] dark:hover:text-[#353535] transition-all duration-200"
            >
              <AiFillGithub />
            </Link>
            <Link
              href={'https://linkedin.com/in/mucahittasan'}
              target="_blank"
              className="p-2 hover:text-[#d1d1d1] dark:hover:text-[#353535] transition-all duration-200"
            >
              <AiFillLinkedin />
            </Link>
          </div>
        </m.div>
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
          className="w-full"
        >
          <Lottie
            className="!w-full !h-96"
            animationData={animationData}
            loop
            autoplay
            style={{ width: 300, height: 300 }}
          />
        </m.div>
      </div>
    </m.div>
  )
}

export default HomePage
