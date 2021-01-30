import { useState, useRef, useEffect, useCallback } from "react";

export default function useModal(initialValue = false) {
  const node = useRef();

  const [isOpen, setModal] = useState(initialValue);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModal(true);
  };

  const handleCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  const handleUserEvent = (e) => {
    if (
      (e.type === "mousedown" && !node.current.contains(e.target)) |
      (e.key === "Escape")
    ) {
      setModal(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("mousedown", handleUserEvent);
      window.addEventListener("keydown", handleUserEvent);
    } else {
      window.removeEventListener("mousedown", handleUserEvent);
      window.removeEventListener("keydown", handleUserEvent);
    }

    return () => {
      window.removeEventListener("mousedown", handleUserEvent);
      window.removeEventListener("keydown", handleUserEvent);
    };
  }, [isOpen]);

  return [node, isOpen, handleOpenModal, handleCloseModal, modalContent];
}
