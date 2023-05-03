"use client"

import { useEffect, useState } from 'react'
import { FaRegSun, FaRegMoon } from 'react-icons/fa'

const ToggleDarkMode = () => {
    const [open, setOpen] = useState<boolean>(false)

    const toggleDarkButton = () => {

        localStorage.theme === "dark" ? localStorage.theme = "light" : localStorage.theme = "dark"

        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
            setOpen(true);
        } else {
            document.documentElement.classList.remove('dark')
            setOpen(false)
        }


    }

    useEffect(() => {

        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
            setOpen(true);
        } else {
            document.documentElement.classList.remove('dark')
            setOpen(false)
        }

    }, []);
    return (
        <button
            onClick={() => toggleDarkButton()}
            className={`overflow-hidden relative flex items-center justify-center text-lg w-9 h-9 rounded-lg transition-all
        ${!open ? "bg-[#333] hover:bg-[#262626] text-white" : "bg-amber-300 hover:bg-amber-400 text-[#333]"} `}>

            <div className={` absolute ${!open ? "translate-y-[-200%]" : "translate-y-0"} transition duration-500`}>
                <FaRegSun />
            </div>

            <div className={` absolute ${open ? "translate-y-[-200%]" : "translate-y-0"} transition duration-500`}>
                <FaRegMoon />
            </div>

        </button>
    )
}

export default ToggleDarkMode