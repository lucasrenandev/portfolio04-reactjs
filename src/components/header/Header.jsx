import { Header, Logo, Navbar, 
Navlist, List, MenuIcon } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
import { BiMenu } from "react-icons/bi"
import { useState } from "react";

export default function header() {
    const [menuIcon] = useState(<BiMenu/>)

    return(
        <>
            <Header>
                <Logo href="/">
                    Portfo<span>lio</span>
                </Logo>
                <Navbar>
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
                <MenuIcon>
                    {menuIcon}
                </MenuIcon>
            </Header>
        </>
    )
}