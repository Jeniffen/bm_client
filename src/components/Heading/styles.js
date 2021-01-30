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

const mainFontWeight = ({ mainTextWeight }) => {
  switch (mainTextWeight) {
    case "semi-thick":
      return 400;
    case "thick":
      return 600;
    case "xl-thick":
      return 700;
    default:
      return 600;
  }
};

const subFontWeight = ({ subTextWeight }) => {
  switch (subTextWeight) {
    case "semi-thick":
      return 400;
    case "thick":
      return 600;
    default:
      return 400;
  }
};

const mainFontSize = (mainTextSize) => {
  if (typeof mainTextSize !== "undefined") {
    return parseInt(mainTextSize);
  } else {
    return 28;
  }
};

const subFontSize = (subTextSize) => {
  if (typeof subTextSize !== "undefined") {
    return parseInt(subTextSize);
  } else {
    return 14;
  }
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  color: ${color};
  text-align: ${textAlign};
  letter-spacing: -0.05em;
  line-height: 1;
  margin-bottom: 30px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;
`;

export const MainHeader = styled.span`
  font-weight: ${mainFontWeight};
  font-size: ${({ mainTextSize }) => mainFontSize(mainTextSize) + "px"};
  white-space: pre-line;
`;

export const SubHeader = styled.span`
  margin-top: 8px;
  font-weight: ${subFontWeight};
  font-size: ${({ subTextSize }) => subFontSize(subTextSize) + "px"};
  white-space: pre-line;
`;

export default { Wrapper, MainHeader, SubHeader };
