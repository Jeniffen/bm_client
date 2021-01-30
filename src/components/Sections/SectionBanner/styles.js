import styled from "styled-components";
import { Button } from "../../Button";

export const Banner = styled.div`
  height: 480px;
  width: 100%;
  background: url(${(props) => props.imageURL}) no-repeat;
  border-radius: 12px;
  background-position: center;
  background-size: cover;
`;

export const CallToAction = styled.div`
  position: absolute;
  left: 8%;
  top: 30%;
`;

export const ExtendedButton = styled(Button)`
  margin-top: 36px;
  position: relative;
  font-weight: 600;
`;

export default {
  Banner,
  CallToAction,
  ExtendedButton,
};
