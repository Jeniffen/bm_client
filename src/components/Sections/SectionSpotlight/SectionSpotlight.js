import React from "react";
import PropTypes from "prop-types";
import Style from "./styles";
import { SectionWrapper } from "../SectionWrapper";
import { Heading } from "../../Heading";
import { Tile } from "../../Tile";

const SectionSpotlight = ({
  title,
  subtitle,
  headingColor,
  sectionTheme,
  tileSize,
  tileType,
  tileContent,
  buttonTheme,
  buttonSize,
  buttonLabel,
  className,
}) => {
  return (
    <SectionWrapper sectionTheme={sectionTheme}>
      <Heading mainTitle={title} subTitle={subtitle} textColor={headingColor} />
      {buttonLabel ? (
        <Style.ExtendedButton
          className={className}
          type={buttonTheme}
          size={buttonSize}
          label={buttonLabel}
        />
      ) : null}
      <Style.Carousel>
        {tileContent.map(({ key, imageURL, title }) => (
          <Tile
            key={key}
            imageURL={imageURL}
            title={title}
            tileSize={tileSize}
            tileType={tileType}
          />
        ))}
      </Style.Carousel>
    </SectionWrapper>
  );
};

SectionSpotlight.propTypes = {
  /**
   * Title of Section
   */
  title: PropTypes.string,
  /**
   * Subtitle of Section
   */
  subtitle: PropTypes.string,
  /**
   * Color of header text
   */
  headingColor: PropTypes.string,
  /**
   * Theme of the section
   */
  sectionTheme: PropTypes.oneOf(["light", "dark"]),
  /**
   * The size of the tile displayed
   */
  tileSize: PropTypes.oneOf(["medium", "large"]),
  /**
   * The shape of the tile displayed
   */
  tileType: PropTypes.oneOf(["square", "rectangle"]),
  /**
   * Title of tile
   */
  tileContent: PropTypes.arrayOf(PropTypes.object),
  /**
   * Is this the principal call to action on the page?
   */
  buttonTheme: PropTypes.oneOf(["primary", "secondary", "dark"]),
  /**
   * Button contents
   */
  buttonLabel: PropTypes.string,
  /**
   * How large should the button be?
   */
  buttonSize: PropTypes.oneOf(["small", "extra-large"]),
};

export default SectionSpotlight;
