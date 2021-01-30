import React from "react";
import PropTypes from "prop-types";
import Style from "./styles";

const SectionWrapper = ({ sectionTheme, children, className }) => {
  return (
    <Style.Wrapper className={className} sectionTheme={sectionTheme}>
      <Style.Content id="sectionContent">{children}</Style.Content>
    </Style.Wrapper>
  );
};

SectionWrapper.propTypes = {
  /**
   * Determine what kind of background theme should applied within this wrapper
   */
  sectionTheme: PropTypes.oneOf(["light", "dark"]),
  /**
   * Elements or Objects that will be shown within this wrapper
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.object,
  ]),
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default SectionWrapper;
