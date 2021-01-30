import styled from "styled-components";

const textAlign = ({ textAlign }) => {
  if (typeof textAlign !== "undefined") {
    return textAlign;
  } else {
    return "left";
  }
};

const color = ({ textColor }) => {
  if (typeof textColor !== "undefined") {
    return textColor;
  } else {
    return "#484848";
  }
};

const fontSize = (textSize) => {
  if (typeof textSize !== "undefined") {
    return parseInt(textSize);
  } else {
    return 20;
  }
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  color: ${color};
  text-align: ${textAlign};
  line-height: 1;
  margin-bottom: 30px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;
`;

export const Text = styled.span`
  font-weight: 100;
  font-size: ${({ textSize }) => fontSize(textSize) + "px"};
  white-space: pre-line;
`;

export default { Wrapper, Text };
