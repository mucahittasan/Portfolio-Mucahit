
import Link from 'next/link'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ["latin"],
})

const Logo = () => {
    return (
        <Link href="/" className='flex items-center gap-x-2 text-xl group'>
            <img
                className='w-8 h-8 transition duration-500 group-hover:rotate-180'
                alt='Logo'
                src="/image/favicon.png"
            />
            <div className={`font-bold ${orbitron.className}`}>Mucahit | Stealim</div>
        </Link>
    )
}

export default Logo