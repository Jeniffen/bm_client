import React from "react";
import PropTypes from "prop-types";
import Style from "./styles";

const Paragraph = ({ text, textAlign, textColor, textSize, className }) => {
  return (
    <Style.Wrapper
      textAlign={textAlign}
      textColor={textColor}
      className={className}
    >
      <Style.Text textSize={textSize}>{text}</Style.Text>
    </Style.Wrapper>
  );
};

Paragraph.propTypes = {
  /**
   * Paragraph text
   */
  text: PropTypes.string,
  /**
   * Aligment of text
   */
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  /**
   * Color of text
   */
  textColor: PropTypes.string,
  /**
   * Font size for text (numeric value withouht "px")
   */
  textSize: PropTypes.string,
};

export default Paragraph;
