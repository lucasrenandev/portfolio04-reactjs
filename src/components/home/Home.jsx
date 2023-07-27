import { Home, HomeText, H3, H1, H4, 
Paragraph, Button, HomeImage, Image } from "./styled";
import homeImg from "../../assets/home.png"
import { useEffect } from "react";

export default function home() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "50px",
            duration: 2500,
            reset: true
        })
        sr.reveal(".home-text", {delay: 200, origin: "top"})
        sr.reveal(".home-image", {delay: 300, origin: "top"})
    }, [])

    return(
        <Home id="home">
            <HomeText className="home-text">
                <H3>Hello, I am</H3>
                <H1>Sergio Gadot</H1>
                <H4>I am passionate Full-Stack <span>Developer</span></H4>
                <Paragraph>
                    I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
                </Paragraph>
                <Button className="btn" href="#">
                    Download CV       
                </Button>
            </HomeText>
            <HomeImage className="home-image">
                <Image src={homeImg} alt="Main image"/>
            </HomeImage>
        </Home>
    )
}