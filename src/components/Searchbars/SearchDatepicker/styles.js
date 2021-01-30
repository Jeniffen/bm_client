import styled, { css } from "styled-components";
import { Toggle } from "../../Toggle";
import { IconButton } from "../../IconButton";
import { Datepicker } from "../../Datepicker";
import { SearchButton } from "../SearchButton";

const SearchDatePicker = styled(Datepicker)`
  position: absolute;
  top: 76px;
  right: 0;
`;

export const ExtendedToggle = styled(Toggle)`
  display: flex !important;
  width: 100%;
  flex-direction: row;
`;

const ClearButton = styled(IconButton)`
  display: none;
  margin: 0 12px;
`;

const ExtendedSearchButton = styled(SearchButton)`
  display: flex;
`;

const ButtonContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;

  :hover > * {
    cursor: pointer !important;
  }
`;

const InputWrapper = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  outline: none;
  border: none;
  border-radius: 32px;
  height: 64px;
  width: 100%;
  padding: 14px 32px;
  background-color: transparent;

  ${ButtonContainer} {
    position: absolute;
    top: 0;
    right: 12px;
  }

  :hover {
    background-color: #efefef;
  }

  :focus {
    background: #fff !important;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
  }
`;

const Label = styled.span`
  position: relative;
  height: 16px;
  padding-bottom: 2px;
  border-left: 1px solid transparent;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
`;

const Input = styled.input`
  height: 18px;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-overflow: ellipsis;
  color: #222222;
  background: none;
  margin: 0;

  :focus {
    font-weight: 500;
  }

  :hover {
    cursor: pointer !important;
  }
`;

const VSeparator = styled.div`
  border-left: 1px solid #dddddd;
  margin: 16px 0;
`;

const Wrapper = styled.div`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e2e8f0;
  }
  z-index: 100;

  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  max-width: 440px;
  width: 100%;
  background-color: transparent;

  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;

  &:hover > * {
    cursor: pointer !important;
  }

  :focus-within {
    ${InputWrapper} {
      border: 1px solid #fff !important;
      background: #fff !important;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
    }

    ${ClearButton} {
      display: ${({ inputState }) => {
        return inputState === null ? css`none` : css`flex`;
      }};
      background-color: #efefef;

      :hover {
        background-color: #dddddd !important;
      }
    }

    ${ExtendedSearchButton} {
      transition: color 0.1s linear;
      width: 119px;
      border-radius: 24px;
      justify-content: left;

      .SearchButton-Label {
        color: #fff;
        display: flex;
        margin: 0 6px;
      }

      .SearchButton-Icon {
        margin: 0 8px 0 20px;
      }
    }
  }
`;

export default {
  SearchDatePicker,
  ExtendedToggle,
  ExtendedSearchButton,
  ButtonContainer,
  Wrapper,
  InputWrapper,
  Label,
  Input,
  ClearButton,
  VSeparator,
};
