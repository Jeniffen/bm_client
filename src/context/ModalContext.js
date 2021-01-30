import React, { createContext } from "react";
import useModal from "../hooks/useModal";
import { Modal } from "../components/Modal";

const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [
    node,
    isOpen,
    handleOpenModal,
    handleCloseModal,
    modalContent,
  ] = useModal();
  const modalNode = "modal-root";

  return (
    <ModalContext.Provider
      value={{
        node,
        modalNode,
        isOpen,
        handleOpenModal,
        handleCloseModal,
        modalContent,
      }}
    >
      <Modal modalContent={modalContent} />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalContextProvider };
