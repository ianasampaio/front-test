import styled, { createGlobalStyle } from "styled-components";
import * as colors from '../config/colors';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        background-color: ${colors.primaryColor};

    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

`;

export const Container = styled.section`
    max-width: 800px;
    margin: 30px auto;
    padding: 30px;
`