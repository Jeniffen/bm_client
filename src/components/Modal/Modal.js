import React, { useContext } from "react";
import PropTypes from "prop-types";
import Style from "./styles";
import { createPortal } from "react-dom";
import { ModalContext } from "../../context/ModalContext";

const Modal = ({ modalContent }) => {
  const { node, modalNode, isOpen } = useContext(ModalContext);

  return createPortal(
    isOpen ? (
      <Style.Wrapper>
        <Style.Content ref={node}>{modalContent}</Style.Content>
      </Style.Wrapper>
    ) : null,
    document.getElementById(modalNode)
  );
};

Modal.propTypes = {
  /**
   * Any React component that is supposed to displayed
   */
  modalContent: PropTypes.element,
};

export default Modal;
