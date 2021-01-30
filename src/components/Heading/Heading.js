import React from "react";
import PropTypes from "prop-types";
import Style from "./styles";

const Heading = ({
  mainTitle,
  subTitle,
  textAlign,
  textColor,
  mainTextWeight,
  subTextWeight,
  mainTextSize,
  subTextSize,
  className,
}) => {
  return (
    <Style.Wrapper
      textAlign={textAlign}
      textColor={textColor}
      className={className}
    >
      <Style.MainHeader
        mainTextWeight={mainTextWeight}
        mainTextSize={mainTextSize}
      >
        {mainTitle}
      </Style.MainHeader>
      <Style.SubHeader subTextWeight={subTextWeight} subTextSize={subTextSize}>
        {subTitle}
      </Style.SubHeader>
    </Style.Wrapper>
  );
};

Heading.propTypes = {
  /**
   * Primary header text
   */
  mainTitle: PropTypes.string,
  /**
   * Secondary header text
   */
  subTitle: PropTypes.string,
  /**
   * Aligment of header text
   */
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  /**
   * Color of header text
   */
  textColor: PropTypes.string,
  /**
   * Font weight of main header
   */
  mainTextWeight: PropTypes.oneOf(["semi-thick", "thick", "xl-thick"]),
  /**
   * Font weight of sub header
   */
  subTextWeight: PropTypes.oneOf(["semi-thick", "thick", "xl-thick"]),
  /**
   * Font size for main header (numeric value withouht "px")
   */
  mainTextSize: PropTypes.string,
  /**
   * Font size for main header (numeric value withouht "px")
   */
  subTextSize: PropTypes.string,
};

export default Heading;
