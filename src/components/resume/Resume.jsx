import { Resume, Header, H2, ResumeContent,
Box, H5, H4, Paragraph, H6 } from "./styled";
import { useEffect } from "react";

export default function resume() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "50px",
            duration: 2500,
            reset: true
        })
        sr.reveal("#resume", {delay: 200, origin: "top"})
    }, [])
    return(
        <Resume id="resume">
            <Header>
                <H2>Education & Experience</H2>
            </Header>
            <ResumeContent>
                <Box>
                    <H5>March 2013 - Present</H5>
                    <H4>Web Development</H4>
                    <Paragraph>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident esse amet iure alias ex similique eaque autem dolores?
                    </Paragraph>
                    <H6>Nortsouth University</H6>
                </Box>
                <Box>
                    <H5>March 2013 - Present</H5>
                    <H4>Web Design</H4>
                    <Paragraph>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident esse amet iure alias ex similique eaque autem dolores?
                    </Paragraph>
                    <H6>Nortsouth University</H6>
                </Box>
                <Box>
                    <H5>March 2013 - Present</H5>
                    <H4>UI/UX Design</H4>
                    <Paragraph>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident esse amet iure alias ex similique eaque autem dolores?
                    </Paragraph>
                    <H6>Nortsouth University</H6>
                </Box>
                <Box>
                    <H5>March 2013 - Present</H5>
                    <H4>Behance</H4>
                    <Paragraph>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident esse amet iure alias ex similique eaque autem dolores?
                    </Paragraph>
                    <H6>Nortsouth University</H6>
                </Box>
                <Box>
                    <H5>March 2013 - Present</H5>
                    <H4>Envato</H4>
                    <Paragraph>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident esse amet iure alias ex similique eaque autem dolores?
                    </Paragraph>
                    <H6>Nortsouth University</H6>
                </Box>
                <Box>
                    <H5>March 2013 - Present</H5>
                    <H4>Dribbble</H4>
                    <Paragraph>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident esse amet iure alias ex similique eaque autem dolores?
                    </Paragraph>
                    <H6>Nortsouth University</H6>
                </Box>
            </ResumeContent>
        </Resume>
    )
}