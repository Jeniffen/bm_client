import styled, { css } from 'styled-components';
import { SectionWrapper } from '../../components/Sections/SectionWrapper';
import { Searchbar } from '../../components/Searchbars/Searchbar';
import { Navbar } from '../../components/Navbar';

const SearchbarExtended = styled(Searchbar)`
  position: relative;
  background: transparent;
  z-index: 45;

  ${({ wrapBar }) =>
    wrapBar &&
    css`
      height: 48px;

      #searchbarFieldset {
        display: none;
      }

      #searchbarSearchPanel {
        transition: width 0.2s ease;
        width: 300px;
        height: 48px;
        border: 1px solid #ddd;
        box-shadow: none;

        ${({ expandBar }) =>
          !expandBar &&
          css`
            input {
              ::placeholder {
                color: #000 !important;
              }
            }
          `}

        :hover {
          ${({ expandBar }) =>
            expandBar
              ? css`
                  transition: none;
                `
              : css`
                  * {
                    cursor: pointer;
                  }
                  transition: box-shadow 0.2s ease;
                  box-shadow: 4px 5px 5px -5px rgba(0, 0, 0, 0.25);
                `}
        }
      }

      .searchInputPrimary {
        display: none;
      }

      #searchinputLabel {
        display: none;
      }

      #searchinputInputWrapper {
        width: 300px;
        height: 48px;
        :hover {
          background: transparent;
        }
      }

      #searchinputButtonContainer {
        right: 8px;
      }

      .SearchButton {
        height: 36px;
        width: 36px;
      }
    `}

  ${({ expandBar }) =>
    expandBar &&
    css`
      height: 100% !important;
      margin: 24px auto;

      #searchbarFieldset {
        display: block !important;
      }

      #searchbarSearchPanel {
        width: 100%;
        height: 100%;
      }

      .searchInputPrimary {
        display: flex;
      }

      #searchinputLabel {
        display: flex;
      }

      #searchinputInputWrapper {
        width: inherit;
        height: inherit;

        :hover {
          background-color: #efefef;
        }
      }

      #searchinputButtonContainer {
        right: 12px;
      }

      .SearchButton {
        height: 48px !important;
        width: 48px;
      }
    `}
`;

const NavbarExtended = styled(Navbar)`
  position: absolute;
  top: 0;
  right: 80px;
  width: 300px;
  z-index: 50;
`;

const WrapperSection = styled(SectionWrapper)`
  padding: 0;
  transition: background-color 0.1s ease;
  background-color: transparent;

  #sectionContent {
    transition: height 0.2s ease 0.05s;
    min-height: 80px;
    height: 196px;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  ${({ wrapBar }) =>
    wrapBar &&
    css`
      transition: background-color 0.1s ease 0.1s;
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px;

      #sectionContent {
        transition: height 0.2s ease;
        height: 80px;
      }
    `}

  ${({ expandBar }) =>
    expandBar &&
    css`
      #sectionContent {
        transition: height 0.2s ease !important;
        height: 196px !important;
      }
    `}
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 40;
  display: flex;
  background-color: transparent;
  width: 100%;
`;

const Spotlight = styled.div`
  ${({ expandBar, wrapBar }) =>
    wrapBar && expandBar
      ? css`
          position: fixed;
          z-index: 30;
          height: 100%;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.25) !important;
        `
      : null}
`;
export default {
  SearchbarExtended,
  NavbarExtended,
  WrapperSection,
  Wrapper,
  Spotlight,
};
