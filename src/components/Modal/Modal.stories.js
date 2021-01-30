import React from "react";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";
import { Modal } from "./";

const StyledTemplateModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 250px;
  border-radius: 12px;
  background-color: white;

  p {
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
      "Helvetica Neue", sans-serif !important;
  }
`;

export default {
  title: "COMPONENTS API/Modal",
  decorators: [
    (Story) => (
      <ModalContext.Provider value={{ isOpen: true, modalNode: "root" }}>
        <Story />
      </ModalContext.Provider>
    ),
  ],
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  modalContent: (
    <StyledTemplateModal>
      <p>This is a modal</p>
    </StyledTemplateModal>
  ),
};
