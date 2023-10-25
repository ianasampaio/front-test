import styled from "styled-components";
import { primaryColor, primaryDarkColor, secondaryColor, warninColor } from "../../config/colors";

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 600;
    color: ${primaryDarkColor};
    text-align: center;
    margin-bottom: 20px;
    margin-top: 30px;
`;

export const Subtitle = styled.div`
    margin-top: 50px;
    width: 740px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;

export const ContactContainer = styled.div`
    background-color: white;
    border: 1px solid ${secondaryColor};
    border-radius: 10px;
    font-size: 16px;
    box-shadow: 0 0 10px rgba(0,0,0,0.05);
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
    font-size: 16px;
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

export const SubmitButton = styled.button`
  margin-top: 30px;
  padding: 13px 20px;
  font-size: 16px;
  background-color: #6af7c8;
  color: ${primaryDarkColor};
  border: none;
  cursor: pointer;
  border-radius: var(--btn-border-radius, 9999999px);
`;

export const CancelButton = styled.button`
  margin-top: 30px;
  padding: 13px 20px;
  font-size: 16px;
  background-color: ${warninColor};
  color: ${primaryDarkColor};
  border: none;
  cursor: pointer;
  border-radius: var(--btn-border-radius, 9999999px);
`;
