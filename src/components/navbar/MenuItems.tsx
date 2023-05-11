"use client"

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export type Links = {
    label: string,
    path: string,
    targetSegment: string
}[]

const links: Links = [
    { label: "Blog", path: "/blog", targetSegment: "blog" },
    { label: "Projects", path: "/projects", targetSegment: "projects" },
]


const MenuItems = () => {

    const activeSegment = useSelectedLayoutSegment();

    return (
        <nav>
            <ul className={`gap-x-8 hidden md:flex`}>
                {links.map((link) => (
                    <li key={link.label}>
                        <Link className={`navbar-item ${activeSegment === link.targetSegment && "before:w-full before:bg-blueColor"}`} href={link.path}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MenuItems