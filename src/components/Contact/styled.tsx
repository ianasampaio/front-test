import styled from "styled-components";
import { infoColor } from "../../config/colors";

export const Button = styled.button`
  background-color: ${infoColor};
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  margin-left: 651px;
  margin-bottom: 30px;
  border-radius: var(--btn-border-radius, 9999999px);
`;