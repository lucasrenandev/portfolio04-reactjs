import { Header, Logo, Navbar, 
Navlist, List, MenuIcon } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
import { BiMenu } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import { useEffect, useRef, useState } from "react";

export default function header() {
    const [menuIcon, setMenuIcon] = useState(<BiMenu/>)
    const navRef = useRef(null)

    const menuToggle = () => {
        if(!navRef.current.classList.contains("active")) {
            navRef.current.classList.add("active")
            setMenuIcon(<IoClose/>)
        }
        else {
            navRef.current.classList.remove("active")
            setMenuIcon(<BiMenu/>)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", function() {
            if(navRef.current.classList.contains("active")) {
                navRef.current.classList.remove("active")
                setMenuIcon(<BiMenu/>)
            }
        })
    }, [])  

    return(
        <>
            <Header>
                <Logo href="/">
                    Portfo<span>lio</span>
                </Logo>
                <Navbar ref={navRef}>
                    <Navlist>
                        <List>
                            <Link smooth to={"#home"}>Home</Link>
                        </List>
                        <List>
                            <Link smooth to={"#about"}>About</Link>
                        </List>
                        <List>
                            <Link smooth to={"#services"}>Services</Link>
                        </List>
                        <List>
                            <Link smooth to={"#resume"}>Resume</Link>
                        </List>
                        <List>
                            <Link smooth to={"#contact"}>Contact</Link>
                        </List>
                    </Navlist>
                </Navbar>
                <MenuIcon onClick={menuToggle}>
                    {menuIcon}
                </MenuIcon>
            </Header>   
        </>
    )
}