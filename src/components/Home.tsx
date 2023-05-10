"use client"

import Link from "next/link";
import { HiCursorClick } from "react-icons/hi";

import Lottie from 'lottie-react';
import animationData from '../../public/animations/coderr.json';

const HomePage = () => {



    return (
        <div className="my-16">

            <div className="flex flex-col items-start">
                <h2 className="home-title gradient-text ">Hi, I&apos;m Mucahit Tasan</h2>

                <p className="home-paragraph">I&apos;m a <span className="text-pinkColor font-bold">Frontend Developer</span> and i have been trying to improve myself in the web field for 3 years. Until now, I have done many projects related to this field as much as I can and added them to my github account. I generally worked with <span>Html</span>, <span>Css</span>, <span>Javascript</span>, <span>React.js</span>, <span>Redux Toolkit</span>, <span>Next.js</span>, <span>NextAuth</span>, <span>Typescript</span>, <span>Scss(Sass)</span>, <span>Tailwindcss</span>, <span>Bootstrap</span>, <span>Nodejs</span>, <span>Express.js</span>, <span>Prisma</span>, <span>MongoDb</span> and <span>Figma</span> technologies.</p>

                <Link
                    className="mt-12 btn btn-primary"
                    href="https://drive.google.com/file/d/1XvMKXGsHce2lF6eHSpCA7V6-t4b71cng/view?usp=sharing"
                    target="_blank"
                >
                    <HiCursorClick />
                    <span>Resume</span>
                </Link>
                <Lottie
                    className="!w-full !h-96"
                    animationData={animationData}
                    loop
                    autoplay
                    style={{ width: 300, height: 300 }}
                />
            </div>

        </div>
    )
}

export default HomePage