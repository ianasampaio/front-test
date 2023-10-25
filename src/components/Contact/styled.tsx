import styled from "styled-components";
import { infoColor, primaryDarkColor, secondaryColor, warninColor } from "../../config/colors";

export const NewTitle = styled.h2`
  padding-left: 30px;
  margin-top: 10px;
`;

export const Button = styled.button`
  width: 100px;
  background-color: ${infoColor};
  font-size: 16px;
  color: #000;
  padding: 10px 20px;
  border: none;
  font-weight: bold;
  /* margin-left: 640px; */
  margin-bottom: 30px;
  border-radius: var(--btn-border-radius, 9999999px);
`;

export const FormContainer = styled.form`
  width: 600px;
  margin: 30px;
  `;

export const FormField = styled.input`
  display: block;
  margin-bottom: 20px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${secondaryColor};
  border-radius:10px;

  `;

export const ButtonDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

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

export const ErrorMessage = styled.p`
  color: red;
  font-size: 13px;
  margin-top: -12px;
  margin-bottom: 15px;
`;
