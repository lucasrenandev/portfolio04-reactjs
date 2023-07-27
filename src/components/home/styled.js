import { styled } from "styled-components";

export const Home = styled.section`
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 5rem;
`
export const HomeText = styled.main`

`
export const H3 = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
`
export const H1 = styled.h1`
    font-size: var(--h1-font);
    font-weight: 700;
    line-height: 1;
    margin: 1.4rem 0;
`
export const H4 = styled.h4`
    font-size: 1.15rem;
    font-size: 500;
    margin-bottom: 1.4rem;
    & span {
        color: var(--main-color);
    }
`
export const Paragraph = styled.p`
    margin: 1.5rem 0;
    font-size: 1rem;
    font-weight: 300;
    color: var(--2nd-main-color);
    line-height: 1.9;
`
export const Button = styled.a`

`
export const HomeImage = styled.figure`
    text-align: center;
`
export const Image = styled.img`
    width: 420px;
    max-width: 100%;
    height: auto;
`