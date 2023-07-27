import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 14%;
`
export const Logo = styled.a`
    color: inherit;
    font-size: 1.8rem;
    font-weight: 600;
    & span {
        color: var(--main-color);
    }
`
export const Navbar = styled.nav`

`
export const Navlist = styled.ul`
    display: flex;
    align-items: center;
`
export const List = styled.li`
    & a {
        color: inherit;
        font-size: 1rem;
        font-weight: 500;
        padding: 10px 20px;
        transition: background-color 0.3s ease;
        &:hover {
            background-color: var(--main-color);
        }
    }
`
export const MenuIcon = styled.i`
    font-size: 30px;
    z-index: 1001;
    cursor: pointer;
    display: none;
`