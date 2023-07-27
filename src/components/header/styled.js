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
    @media (max-width: 1321px) {
        padding: 25px 5%;
    }
    @media (max-width: 1056px) {
        padding: 20px 2%;
    }
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
    @media (max-width: 990px) {
        position: absolute;
        top: -500px;
        left: 0;
        right: 0;
        width: 100%;
        background-color: #0b0b13;
        transition: top 0.4s ease;
        &.active {
            top: 100%;
        }
    }
`
export const Navlist = styled.ul`
    display: flex;
    align-items: center;
    @media (max-width: 990px) {
        flex-direction: column;
        align-items: flex-start;
    }
`
export const List = styled.li`
    & a {
        color: inherit;
        font-size: 1rem;
        font-weight: 500;
        padding: 10px 22px;
        transition: background-color 0.3s ease;
        &:hover {
            background-color: var(--main-color);
        }
        @media (max-width: 990px) {
            display: block;
            border-left: 2px solid var(--main-color);
        }
    }
    @media (max-width: 990px) {
        margin: 1.8rem 1rem;
    }
`
export const MenuIcon = styled.i`
    font-size: 30px;
    z-index: 1001;
    cursor: pointer;
    display: none;
    @media (max-width: 990px) {
        display: inline-flex;
        align-items: center;
    }
`