import { About, AboutImage, Image, AboutText, H3, H2, 
Paragraph, Counter, CounterText, Buttons, Button } from "./styled";
import aboutImg from "../../assets/about.png"
import { useEffect } from "react";

export default function about() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "50px",
            duration: 2500,
            reset: true
        })
        sr.reveal("#about", {delay: 200, origin: "top"})
    }, [])
    
    return(
        <About id="about">
            <AboutImage>
                <Image src={aboutImg} alt="About image"/>
            </AboutImage>
            <AboutText>
                <H3>About me</H3>
                <H2>I'm a Freelancer Front-End Developer with over 3 years of experience.</H2>
                <Paragraph>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo odio ex eligendi in rerum quidem dolorum voluptatem illo commodi autem optio, nobis maiores pariatur, fugiat culpa, quibusdam aliquid mollitia quasi quos. Qui fugit dolor ipsum?
                </Paragraph>
                <Counter>
                    <CounterText>
                        <span>5k</span>
                        Projects complete
                    </CounterText>
                    <CounterText>
                        <span>5k</span>
                        Satisfield clients
                    </CounterText>
                </Counter>
                <Buttons>
                    <Button className="btn" href="#">
                        Contact me
                    </Button>
                    <Button className="btn" href="#">
                        Portfolio
                    </Button>
                </Buttons>
            </AboutText>
        </About>
    )
}