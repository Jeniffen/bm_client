import React from "react";
import PropTypes from "prop-types";
import Style from "./styles";

const SectionHero = ({
  imageURL,
  headingText,
  headingColor,
  mainHeaderSize,
  mainHeaderWeight,
  buttonTheme,
  buttonSize,
  buttonLabel,
  className,
}) => {
  return (
    <Style.Wrapper imageURL={imageURL}>
      <Style.Content>
        <Style.CallToAction>
          <Style.Header
            className={className}
            mainTitle={headingText}
            textColor={headingColor}
            mainTextSize={mainHeaderSize}
            mainTextWeight={mainHeaderWeight}
          />
          <Style.ExtendedButton
            className={className}
            type={buttonTheme}
            size={buttonSize}
            label={buttonLabel}
          />
        </Style.CallToAction>
      </Style.Content>
    </Style.Wrapper>
  );
};

SectionHero.propTypes = {
  /**
   * URL to tile image
   */
  imageURL: PropTypes.string,
  /**
   * Primary header text
   */
  headingText: PropTypes.string,
  /**
   * Color of header text
   */
  headingColor: PropTypes.string,
  /**
   * Font size for main header (numeric value withouht "px")
   */
  mainHeaderSize: PropTypes.string,
  /**
   * Font weight of sub header
   */
  subTextWeight: PropTypes.oneOf(["semi-thick", "thick", "xl-thick"]),
  /**
   * Is this the principal call to action on the page?
   */
  buttonTheme: PropTypes.oneOf(["primary", "secondary", "dark", "light"]),
  /**
   * How large should the button be?
   */
  buttonSize: PropTypes.oneOf(["small", "extra-large"]),
  /**
   * Button contents
   */
  buttonLabel: PropTypes.string.isRequired,
};

export default SectionHero;
