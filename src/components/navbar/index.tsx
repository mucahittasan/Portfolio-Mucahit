// Components
import Container from '../Container'
import NavbarMenuModal from '../modals/NavbarMenuModal'
import Logo from './Logo'
import MenuItems from './MenuItems'
import ToggleMenu from './ToggleMenu'

const Navbar = () => {
    return (
        <header className='fixed w-full backdrop-blur transition'>
            <Container className='flex items-center py-4 justify-between relatıve'>
                <Logo />
                <MenuItems />
                <ToggleMenu />
                <NavbarMenuModal />
            </Container>
        </header>
    )
}

export default Navbar