import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import useSearchbar from './useSearchbar';
import { SearchInput } from '../SearchInput';
import { SearchDatepicker } from '../SearchDatepicker';

const Searchbar = ({ inputs, expandBar, wrapBar, className }) => {
  const [isSearchbarFolded] = useSearchbar({ expandBar, wrapBar });

  return (
    <Style.FormWrapper className={className} id="searchbarFromWrapper">
      <Style.SearchPanel id="searchbarSearchPanel">
        {inputs.map((prop) => (
          <SearchInput
            key={prop.key}
            className={prop.className}
            inputLabel={prop.inputLabel}
            inputPlaceholder={
              isSearchbarFolded
                ? 'Find what you are looking for'
                : prop.inputPlaceholder
            }
            isSearchbarFolded={isSearchbarFolded}
            isSearch={isSearchbarFolded && !expandBar}
            divider={prop.divider}
          />
        ))}
        <SearchDatepicker
          className="searchInputPrimary"
          inputLabel="Date"
          inputPlaceholder="Add a date for your event"
          isSearchbarFolded={isSearchbarFolded}
          isSearch={true}
        />
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
