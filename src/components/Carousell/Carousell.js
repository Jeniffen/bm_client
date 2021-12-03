import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles.js';

import { Tile } from '../Tile';

const Carousell = ({ header, className }) => {
  const tileContent = [
    { key: 1, imageURL: 'https://bit.ly/3EhYqSc', label: 'Photography' },
    { key: 2, imageURL: 'https://bit.ly/3Dv2Rbb', label: 'Makeup Artists' },
    { key: 3, imageURL: 'https://bit.ly/3lypvZL', label: 'Venues' },
  ];
  return (
    <Style.CarousellContainer>
      <Style.CarousellHeader header={header} />
      <Style.Carousell className={className}>
        {tileContent.map(({ key, imageURL, label }) => (
          <Tile key={key} imageURL={imageURL} label={label} />
        ))}
      </Style.Carousell>
    </Style.CarousellContainer>
  );
};

Carousell.propTypes = {
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default Carousell;
