import { styled } from "styled-components";

export const Contact = styled.section`

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
export const ContactContent = styled.main`
    display: grid;
    place-content: center;
`
export const Form = styled.form`
    margin-top: 4rem;
    width: 550px;
    max-width: 100vw;
    height: auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & input, textarea {
        width: 100%;
        padding: 20px 25px;
        background-color: #0b0b13;
        border-radius: 5px;
        margin-bottom: 10px;
        color: var(--text-color);
        &::placeholder {
            color: var(--2nd-main-color);
        }
    }
    & textarea {
        height: 180px;
        resize: none;
        margin-bottom: 15px;
    }
`
export const SendButton = styled.button`
    cursor: pointer;
    border-radius: 5px;
    font-weight: 600;
`