import { Services, Header, H2, ServicesBox,
Box, Icon, H4, Paragraph } from "./styled";
import { BiCast, BiLayer, BiUserVoice, BiDesktop,
BiCamera, BiLineChart } from "react-icons/bi"

export default function services() {
    return(
        <Services id="services">
            <Header>
                <H2>What i do</H2>
            </Header>
            <ServicesBox>
                <Box>
                    <Icon>
                        <BiCast/>
                    </Icon>
                    <H4>Web development</H4>
                    <Paragraph>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                    </Paragraph>
                </Box>
                <Box>
                    <Icon>
                       <BiLayer/>
                    </Icon>
                    <H4>Web development</H4>
                    <Paragraph>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                    </Paragraph>
                </Box>
                <Box>
                    <Icon>
                        <BiUserVoice/>
                    </Icon>
                    <H4>Web development</H4>
                    <Paragraph>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                    </Paragraph>
                </Box>
                <Box>
                    <Icon>
                        <BiDesktop/>
                    </Icon>
                    <H4>Web development</H4>
                    <Paragraph>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                    </Paragraph>
                </Box>
                <Box>
                    <Icon>
                        <BiCamera/>
                    </Icon>
                    <H4>Web development</H4>
                    <Paragraph>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                    </Paragraph>
                </Box>
                <Box>
                    <Icon>
                        <BiLineChart/>
                    </Icon>
                    <H4>Web development</H4>
                    <Paragraph>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                    </Paragraph>
                </Box>
            </ServicesBox>
        </Services> 
    )
}