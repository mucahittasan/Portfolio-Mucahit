
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
    return (
        <Link href="/" className='flex items-center gap-x-2 text-xl group'>
            <div className='relative w-8 h-8'>
                <Image
                    fill
                    className='transition duration-500 group-hover:rotate-180'
                    alt='Logo'
                    src="/image/favicon.png"
                />
            </div>

            <div className={`font-bold font-orbitron`}>Mucahit | Stealim</div>
        </Link>
    )
}

export default Logo