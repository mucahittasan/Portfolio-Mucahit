
import Link from 'next/link'

const MenuItem = () => {

    return (
        <ul className={`gap-x-8 hidden md:flex`}>
            <li>
                <Link className='navbar-item' href="/">Blog</Link>
            </li>
            <li>
                <Link className='navbar-item' href="/">Projects</Link>
            </li>
            <li>
                <Link className='navbar-item' href="/">Contact</Link>
            </li>
        </ul>
    )
}

export default MenuItem