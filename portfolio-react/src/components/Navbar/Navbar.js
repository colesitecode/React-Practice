import react, {useState, useEffect} from 'react'
import { HiMenuAlt3, HiX} from 'react-icons/hi'
import { Button } from '../../globalStyles'
import { Nav, 
    NavbarContainer,
    NavLogo,
    NavIcon, 
    Menu, 
    Navmenu,
    NavItem, 
    NavLinks,
    NavItemBtn, 
    NavBtnLink,
} from './Navbar.elements'

const Navbar = () =>{
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() =>{
        showButton()
    }, [])

    window.addEventListener('resize', showButton)


    return(
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={closeMobileMenu}>
                       <NavIcon />
                            Cole`Site
                    </NavLogo>

                    <Menu onClick={handleClick}>
                        {click ? <HiX/> : < HiMenuAlt3/>}
                    </Menu>

                    <Navmenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='/Services'>Services</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='/Products'>Product</NavLinks>
                        </NavItem>

                        <NavItemBtn>
                            {button ?  (
                                <NavBtnLink to="/sign-up">
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-up">
                                    <Button fontBig primary>
                                        SIGN UP
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </Navmenu>

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar