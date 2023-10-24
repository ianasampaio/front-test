import styled from "styled-components";
import { infoColor, secondaryColor } from "../../config/colors";

export const Button = styled.button`
  background-color: ${infoColor};
  color: #000;
  padding: 10px 20px;
  border: none;
  font-weight: bold;
  margin-left: 651px;
  margin-bottom: 30px;
  border-radius: var(--btn-border-radius, 9999999px);
`;

export const FormContainer = styled.form`
  width: 600px;
  margin: 20px 0;
  `;

export const FormField = styled.input`
  display: block;
  margin-bottom: 20px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${secondaryColor};
`;


export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #0074d9;
  color: #fff;
  border: none;
  cursor: pointer;
`;
