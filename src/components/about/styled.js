import { styled } from "styled-components";

export const About = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 5rem;
    @media (max-width: 990px) {
        grid-template-columns: 1fr;
        text-align: center;
    } 
`
export const AboutImage = styled.figure`

`
export const Image = styled.img`
    width: 420px;
    max-width: 100%;
    height: auto;
`
export const AboutText = styled.main`

`
export const H3 = styled.h3`
    font-size: 1.8rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 6px;
    @media (max-width: 600px) {
        font-size: 1.6rem;
    }
`
export const H2 = styled.h2`
    font-size: var(--h2-font);
    font-weight: 500;
    margin: 1.5rem 0;
    line-height: 1.3;
   
`
export const Paragraph = styled.p`
    font-size: var(--p-font);
    font-weight: 300;
    color: var(--2nd-main-color);
    line-height: 1.9;
`
export const Counter = styled.div`
    margin: 1.5rem 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    @media (max-width: 990px) {
        justify-content: center;
    }
`
export const CounterText = styled.p`
    & span {
        font-size: 2.5rem;
        font-weight: 600;
        margin-right: 8px;
    }
    font-size: var(--p-font);
    font-weight: 400;
    text-transform: capitalize;
`
export const Buttons = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
    @media (max-width: 990px) {
        justify-content: center;
    }
`
export const Button = styled.a`

`