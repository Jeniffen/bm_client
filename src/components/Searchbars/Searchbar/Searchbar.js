import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import useSearchbar from './useSearchbar';
import { SearchInput } from '../SearchInput';

const Searchbar = ({ inputs, expandBar, wrapBar, className }) => {
  const [isSearchbarFolded] = useSearchbar({ expandBar, wrapBar });

  return (
    <Style.FormWrapper className={className} id="searchbarFromWrapper">
      <Style.SearchPanel id="searchbarSearchPanel">
        {inputs.map((prop) => (
          <SearchInput
            key={prop.key}
            className={prop.className}
            inputPlaceholder={'Find what you are looking for'}
            isSearchbarFolded={isSearchbarFolded}
            isSearch={true}
          />
        ))}
      </Style.SearchPanel>
    </Style.FormWrapper>
  );
};

Searchbar.propTypes = {
  /**
   * Object containing input parameters for searchbar input-fields
   */
  inputs: PropTypes.object,
  /**
   * External state whether searchbar is expanded or not
   */
  expandBar: PropTypes.bool,
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default Searchbar;
