import styled from "styled-components";
import { Button } from "../../Button";

export const ExtendedButton = styled(Button)`
  position: absolute;
  right: 80px;
`;

export const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export default {
  ExtendedButton,
  Carousel,
};
