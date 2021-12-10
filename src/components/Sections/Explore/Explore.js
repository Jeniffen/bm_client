import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const Explore = ({ imageURL, text, buttonLabel, className }) => {
  return (
    <Style.Container className={className}>
      <Style.Image imageURL={imageURL} />
      <Style.ExploreCallToAction>
        <Style.ExploreCallToActionText>{text}</Style.ExploreCallToActionText>
        <Style.ExploreButton
          buttonType="dark"
          size="small"
          type="button"
          label={buttonLabel}
        />
      </Style.ExploreCallToAction>
    </Style.Container>
  );
};

Explore.propTypes = {
  /**
   * URL to image that should be displayed in tile
   */
  imageURL: PropTypes.string,
  /**
   * Call-To-Action text displayed in section
   */
  text: PropTypes.string,
  /**
   * Label text of Button
   */
  buttonLabel: PropTypes.string,
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default Explore;
