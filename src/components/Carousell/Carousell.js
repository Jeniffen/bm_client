import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles.js';

const Carousell = ({ Element, header, content, className }) => {
  return (
    <Style.CarousellContainer className={className}>
      <Style.CarousellHeader header={header} />
      <Style.Carousell>
        {content.map(({ key, imageURL, label }) => (
          <Element key={key} imageURL={imageURL} label={label} />
        ))}
      </Style.Carousell>
    </Style.CarousellContainer>
  );
};

Carousell.propTypes = {
  /**
   * A React Component that is displayed in carousell
   */
  Element: PropTypes.elementType,
  /**
   * Title header of Carousell section
   */
  header: PropTypes.string,
  /**
   * Array containing meta information for carousell elements
   */
  content: PropTypes.arrayOf(PropTypes.object),
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default Carousell;
