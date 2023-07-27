import { Contact, Header, H2, ContactContent, 
Form, SendButton } from "./styled";

export default function contact() {
    return(
        <Contact id="contact">
            <Header>
                <H2>Contact us</H2>
            </Header>
            <ContactContent>
                <Form action="#">
                    <input type="text" placeholder="Your name" />
                    <input type="email" placeholder="Your email" />
                    <textarea placeholder="Project description" cols="30" rows="10"></textarea>
                    <SendButton className="btn" type="submit">Send</SendButton>
                </Form>
            </ContactContent>
        </Contact>
    )
}