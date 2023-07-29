import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
        list-style: none;
        text-decoration: none;
        border: none;
        outline: none;
    }

    :root {
        --bg-color: #10101a;
        --main-color: #2fbf71;
        --2nd-main-color: #ffffffcc;
        --text-color: #fff;
        --h1-font: 5rem;
        --h2-font: 1.9rem;
        --p-font: 1rem;
        @media (max-width: 600px) {
            --h1-font: 3.3rem;
            --h2-font: 1.8rem;
        }
    }

    #root {
        min-height: 100vh;
        background-color: var(--bg-color);
        color: var(--text-color);
    }

    section {
        width: 100%;
        padding: 120px 14%;
        @media (max-width: 1321px) {
            padding: 90px 5%;
        }
        @media (max-width: 1056px) {
            padding: 90px 2%;
        }
        @media (max-width: 600px) {
            padding: 80px 2%;
        }
    }

    .btn {
        display: inline-block;
        padding: 13px 25px;
        background-color: var(--main-color);
        color: var(--text-color);
        border: 1px solid transparent;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 2px;
        box-shadow: 4px 4px 0 var(--text-color);
        transition: all 0.4s ease;
        &:hover {
            background-color: var(--text-color);
            color: var(--main-color);
            box-shadow: 4px 4px 0 var(--main-color);
        }
    }
    
`