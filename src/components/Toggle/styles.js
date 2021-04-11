/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";

const ParentWrapper = styled.div`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
`;

const ChildWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  right: 0;
  top: 120%;
`;

export default { ParentWrapper, ChildWrapper };
