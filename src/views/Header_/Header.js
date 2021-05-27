import React from 'react';
import Style from './styles';
import useHeader from './useHeader';
import useSearchbarControl from '../../hooks/useSearchbarControl';

const Header = () => {
  const [ref, expandBar, wrapBar, setExpandedBar] = useSearchbarControl({});
  const [items, inputs, handleHeaderFocus] = useHeader({ setExpandedBar });

  return (
    <>
      <Style.Wrapper onFocus={handleHeaderFocus} ref={ref}>
        <Style.WrapperSection expandBar={expandBar} wrapBar={wrapBar}>
          <Style.SearchbarExtended
            inputs={inputs}
            expandBar={expandBar}
            wrapBar={wrapBar}
          />
        </Style.WrapperSection>
      </Style.Wrapper>
      <Style.Spotlight wrapBar={wrapBar} expandBar={expandBar} />
    </>
  );
};

export default Header;
