import { styled } from "styled-components";

export const Services = styled.section`

`
export const Header = styled.header`
    text-align: center;
`
export const H2 = styled.h2`
    font-size: 1.9rem;
    font-weight: 300;
    text-transform: capitalize;
    letter-spacing: 6px;
    @media (max-width: 600px) {
        font-size: 1.6rem;
    }
`
export const ServicesBox = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
    @media (max-width: 400px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    }
`
export const Box = styled.div`
    background-color: #0b0b13;
    padding: 60px 33px;
    transition: all 0.4s ease;
    &:hover {
        transform: translateY(-15px);
        box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.7);
    }
`
export const Icon = styled.i`
    color: var(--main-color);
    font-size: 3rem;
`
export const H4 = styled.h4`
    font-size: 1.3rem;
    font-weight: 500;
    text-transform: capitalize;
    margin: 1rem 0;
`
export const Paragraph = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.7;
`