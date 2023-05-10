"use client"

import useToggleMenu from "@/hooks/useToggleMenu"
import Link from "next/link";
import { useSelectedLayoutSegment } from 'next/navigation'

const NavbarMenu = () => {

    const toggleMenu = useToggleMenu();
    const activeSegment = useSelectedLayoutSegment();

    return (
        <div className={`w-36 h-auto shadow-md min-h-[120px] origin-top-right absolute flex flex-col justify-center right-4 top-[74px] z-[999] transition-all duration-500 rounded-md
        ${toggleMenu.isOpen ? "scale-100 dark:bg-[#1b1b1b] bg-[#fafafa]" : "scale-0 "}`}>
            <div className="relative flex items-center justify-center h-full">

                <ul className="flex flex-col gap-y-4 items-center h-full justify-center w-full px-4 py-4 pt-0">
                    <li className={` w-full ${toggleMenu.isOpen ? "translate-y-0 opacity-[1]" : "opacity-0 translate-y-[20px]"}`}>
                        <Link className={`navbar-item w-full flex justify-center text-lg dark:text-darkText text-whiteText hover:text-whiteText font-bold ${activeSegment === "blog" && "before:w-full before:bg-blueColor"}`} href="/blog">Blog</Link>
                    </li>
                    <li className={` w-full ${toggleMenu.isOpen ? "translate-y-0 opacity-[1] " : "opacity-0 translate-y-[20px]"}`}>
                        <Link className={`navbar-item w-full flex justify-center text-lg dark:text-darkText text-whiteText hover:text-whiteText font-bold ${activeSegment === "projects" && "before:w-full before:bg-blueColor"}`} href="/projects">Projects</Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default NavbarMenu