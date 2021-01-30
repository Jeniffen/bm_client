import styled from "styled-components";

const primaryColor = ({ sectionTheme }) => {
  switch (sectionTheme) {
    case "light":
      return "transparent";
    case "dark":
      return "#000";
    default:
      return "transparent";
  }
};

const secondaryColor = ({ sectionTheme }) => {
  switch (sectionTheme) {
    case "light":
      return "#484848";
    case "dark":
      return "#fff";
    default:
      return "#484848";
  }
};

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 40px 0;
  background-color: ${primaryColor};
  color: ${secondaryColor};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1760px;
  margin: 0px auto;
  padding: 0 80px;
`;

export default { Wrapper, Content };
