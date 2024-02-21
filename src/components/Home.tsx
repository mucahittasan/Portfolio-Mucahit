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
      transition={{ duration: 0.75, ease: 'easeOut' }}
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="mt-16"
    >
      <div className="flex flex-col items-start">
        <div>
          <h2 className="home-title gradient-text ">
            Hi, I&apos;m Mucahit Tasan
          </h2>
        </div>

        <p className="home-paragraph">
          I&apos;m a{' '}
          <span className="text-pinkColor font-bold">
            Frontend Sofwtare Engineer
          </span>{' '}
          and i have been trying to improve myself in the web field for 4 years.
          Until now, I have done many projects related to this field as much as
          I can and added them to my github account. I generally worked with{' '}
          <span>Html</span>, <span>Css</span>, <span>Javascript</span>,{' '}
          <span>React.js</span>, <span>React Native</span>,{' '}
          <span>Redux Toolkit</span>, <span>Next.js</span>,{' '}
          <span>NextAuth</span>, <span>Typescript</span>,{' '}
          <span>Scss(Sass)</span>, <span>Tailwindcss</span>,{' '}
          <span>Bootstrap</span>, <span>Nodejs</span>, <span>Express.js</span> ,{' '}
          <span>Prisma</span>, <span>MongoDb</span> and <span>Figma</span>{' '}
          technologies.
        </p>

        <div className="flex items-center mt-12">
          <Link
            className=" btn btn-primary"
            href="https://drive.google.com/file/d/1XvMKXGsHce2lF6eHSpCA7V6-t4b71cng/view?usp=sharing"
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
        </div>
        <Lottie
          className="!w-full !h-96"
          animationData={animationData}
          loop
          autoplay
          style={{ width: 300, height: 300 }}
        />
      </div>
    </m.div>
  )
}

export default HomePage
