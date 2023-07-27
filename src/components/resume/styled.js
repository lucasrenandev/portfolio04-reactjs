import { styled } from "styled-components"

export const Resume = styled.section`
    
`
export const Header = styled.header`
    text-align: center;
`
export const H2 = styled.h2`
    font-size: 1.9rem;
    font-weight: 300;
    text-transform: capitalize;
    letter-spacing: 6px;
`
export const ResumeContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    align-items: center;
    gap: 2rem;
    margin-top: 5rem;
`
export const Box = styled.div`
    background-color: #0b0b13;
    padding: 40px 35px;
    transition: all 0.4s ease;
    &:hover {
        transform: translateY(-15px);
        box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.7);
    }
`
export const H5 = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: #3e4455;
`
export const H4 = styled.h4`
    margin: 2rem 0 1rem;
    font-size: 1.3rem;
    font-weight: 700;
    text-transform: capitalize;
`
export const Paragraph = styled.p`
    font-size: var(--p-font);
    font-weight: 600;
    line-height: 1.7;
    margin-bottom: 1.5rem;
`
export const H6 = styled.h6`
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
`