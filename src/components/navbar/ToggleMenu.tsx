"use client"

import { HiMenu } from 'react-icons/hi'
import ToggleDarkMode from './ToggleDarkMode'
import useToggleMenu from '@/hooks/useToggleMenu'

const ToggleMenu = () => {

    const toggleMenu = useToggleMenu();

    return (
        <div className='flex gap-x-4'>

            <ToggleDarkMode />
            <button
                onClick={() => toggleMenu.toggleShow()}
                className='text-[26px] text-whiteText transition-all md:hidden w-9 h-9 rounded-lg dark:bg-[#1f1f1f] dark:text-darkText dark:hover:bg- bg-whiteBackground hover:bg-[#d3d2d2] flex items-center justify-center'
            >
                <HiMenu />
            </button>
        </div>
    )
}

export default ToggleMenu