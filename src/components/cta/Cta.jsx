import { Cta, H3, H2, Button } from "./styled";

export default function cta() {
    return(
        <Cta>
            <H3>Have any project in your mind?</H3>
            <H2>Just say hello!</H2>
            <Button className="btn" href="#">
                Hire me
            </Button>
        </Cta>
    )
}