"use client"

import useToggleMenu from "@/hooks/useToggleMenu"
import Link from "next/link";
import { IoClose } from 'react-icons/io5'

const NavbarMenu = () => {

    const toggleMenu = useToggleMenu();

    return (
        <div className={`fixed left-0 top-0 w-full h-full flex items-center justify-center transition-all duration-500
        ${toggleMenu.isOpen ? "translate-x-0 bg-darkBackground/90" : "translate-x-[200%] "}`}>

            <button
                className="absolute right-14 top-14 text-white text-2xl"
                onClick={toggleMenu.onClose}>
                <IoClose />
            </button>

            <ul className="flex flex-col gap-y-12 items-center">
                <li className={`duration-300 ${toggleMenu.isOpen ? "translate-y-0 opacity-[1] delay-700" : "opacity-0 translate-y-[20px]"}`}>
                    <Link className="navbar-item text-2xl dark:text-white" href="/">Blog</Link>
                </li>
                <li className={`duration-300 ${toggleMenu.isOpen ? "translate-y-0 opacity-[1] delay-[800ms]" : "opacity-0 translate-y-[20px]"}`}>
                    <Link className="navbar-item text-2xl dark:text-white" href="/">Projects</Link>
                </li>
                <li className={`duration-300 ${toggleMenu.isOpen ? "translate-y-0 opacity-[1] delay-[900ms]" : "opacity-0 translate-y-[20px]"}`}>
                    <Link className="navbar-item text-2xl dark:text-white" href="/">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarMenu