// Components
import Container from '../Container'
import Logo from './Logo'
import MenuItem from './MenuItems'
import ToggleMenu from './ToggleMenu'

const Navbar = () => {
    return (
        <div className='fixed w-full backdrop-blur dark:bg-[#f1f1f1] transition'>
            <Container className='flex items-center py-4 justify-between'>
                <Logo />
                <MenuItem />
                <ToggleMenu />
            </Container>
        </div>
    )
}

export default Navbar