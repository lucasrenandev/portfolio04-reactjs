import { Cta, H3, H2, Button } from "./styled";
import { useEffect } from "react";

export default function cta() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "50px",
            duration: 2500,
            reset: true
        })
        sr.reveal("#cta", {delay: 200, origin: "top"})
    }, [])
    return(
        <Cta id="cta">
            <H3>Have any project in your mind?</H3>
            <H2>Just say hello!</H2>
            <Button className="btn" href="#">
                Hire me
            </Button>
        </Cta>
    )
}