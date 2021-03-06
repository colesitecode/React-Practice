import styled, {keyframes } from 'styled-components'
import { Container } from '../../globalStyles'
import { HiCode} from 'react-icons/hi'
import { Link} from 'react-router-dom'

export const Nav = styled.nav`
background: #101522;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
position: sticky;
top: 0;
z-index: 999;
`

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`

export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 30px;
display: flex;
align-items: center;
`


export const NavIcon = styled(HiCode)`
margin-right: 5px;
font-size: 43px;
`

export const Menu = styled.div`
display: none;
color: #fff;
@media screen and (max-width: 960px){
   display: block;
   position: absolute;
   top: 0;
   right: 0;
   transform: translate(-100%, 60%);
   font-size: 1.8rem;
   cursor: pointer;
}
`
export const Navmenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
@media screen and (max-width: 960px){
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease ;
    background: #101522;
}
`

export const NavItem = styled.li`
height: 50px;
border-bottom: 2px solid transparent;

&:hover{
    border-bottom: 2px solid #4b59f7;
}
@media screen and (max-width: 960px){
    width: 100%;

    &:hover{
        border: none;
    }
}
`

export const NavLinks = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;
font-size: 20px;


@media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover{
        color: #4b59f7;
        transition: all 0.3s ease;
    }
}
`


export const NavItemBtn = styled.li`
@media screen and (max-width: 960px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
}
`

export const NavBtnLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;
`