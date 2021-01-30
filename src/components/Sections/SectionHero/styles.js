import styled from "styled-components";
import { Button } from "../../Button";
import { Heading } from "../../Heading";

export const Wrapper = styled.div`
  position: relative;
  background: url(${(props) => props.imageURL}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 84vh;
  background-color: #f7fafc;
  background-position: 50% 60%;

  @media only screen and (max-width: 640px) {
    background-position: 50% 60%;
  }
`;

export const Content = styled.div`
  position: relative;
  margin: 0px auto;
  padding: 0 80px;
  width: 100%;
  height: 100%;
  max-width: 1760px;
  display: flex;
  justify-content: space-between;
  }
`;

export const CallToAction = styled.div`
  position: absolute;
  top: 50%;
`;

export const Header = styled(Heading)`
  line-height: 68px;
`;

export const ExtendedButton = styled(Button)`
  margin-top: 28px;
  position: relative;
  font-weight: 600;
  height: 34px;
`;

export default {
  Wrapper,
  Content,
  CallToAction,
  Header,
  ExtendedButton,
};
