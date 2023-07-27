import { Contact, Header, H2, ContactContent, 
Form, SendButton } from "./styled";
import { useEffect } from "react";

export default function contact() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "50px",
            duration: 2500,
            reset: true
        })
        sr.reveal("#contact", {delay: 200, origin: "top"})
    }, [])
    return(
        <Contact id="contact">
            <Header>
                <H2>Contact us</H2>
            </Header>
            <ContactContent>
                <Form action="#">
                    <input type="text" placeholder="Your name" required />
                    <input type="email" placeholder="Your email" required />
                    <textarea placeholder="Project description" required 
                    cols="30" rows="10"></textarea>
                    <SendButton className="btn" type="submit">Send</SendButton>
                </Form>
            </ContactContent>
        </Contact>
    )
}