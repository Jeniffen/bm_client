import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Style from "./styles";
import useToggle from "../../hooks/useToggle";

const Toggle = ({ children, toggleElement, onHideToggle, className }) => {
  const [refParent, toggleOpen, setToggle] = useToggle({
    onHideToggle: onHideToggle,
  });

  return (
    <Style.ParentWrapper
      className={className}
      ref={refParent}
      onClick={() => setToggle()}
    >
      {children}
      {toggleOpen ? (
        <Style.ChildWrapper>{toggleElement}</Style.ChildWrapper>
      ) : null}
    </Style.ParentWrapper>
  );
};

Toggle.propTypes = {
  /**
   * Element that is passed to being toggled
   */
  toggleElement: PropTypes.element,
};

export default Toggle;
