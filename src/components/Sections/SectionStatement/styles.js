import styled from "styled-components";
import { SectionWrapper } from "../SectionWrapper";
import { Heading } from "../../Heading";
import { Paragraph } from "../../Paragraph";

export const Wrapper = styled(SectionWrapper)`
  #sectionContent {
    flex-direction: row;
    align-items: center;
  }
`;

export const Header = styled(Heading)`
  width: 50%;
  margin: 0;
`;

export const Paragraphs = styled(Paragraph)`
  width: 50%;
  margin: 0;
`;

export default {
  Wrapper,
  Header,
  Paragraphs,
};
