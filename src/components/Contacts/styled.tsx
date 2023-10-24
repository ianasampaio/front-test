import styled from "styled-components";
import { primaryColor, primaryDarkColor, secondaryColor } from "../../config/colors";

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: ${primaryDarkColor};
    text-align: center;
    margin-bottom: 40px;
    margin-top: 30px;
`;

export const ContactContainer = styled.div`
    background-color: white;
    border: 1px solid ${secondaryColor};
    border-radius: 10px;
    font-size: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

`;

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${secondaryColor};

    &:last-child {
        border-bottom: none;
    }
`;

export const Contact = styled.div`
    padding: 30px;
`;

export const Image = styled.div`
    margin: 30px 0 30px 30px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    background-color: ${primaryColor};
`;

export const DivInFlexContainer = styled.div`
    margin-top: 30px;
    margin-left: 210px;
    align-self: flex-start;
    justify-self: flex-start;
`;