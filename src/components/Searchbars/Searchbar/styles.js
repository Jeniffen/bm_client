import styled from "styled-components";

const Fieldset = styled.fieldset`
  display: block;
  width: 100%;
  height: 80px;
  border: 1px solid transparent;
  margin: 0;
  padding: 0;
`;

const SearchPanel = styled.div`
  display: flex;
  align-content: stretch;
  position: relative;
  overflow: visible;
  transition: width 0.1s ease;
  width: 850px;
  max-width: 850px;
  height: 64px;
  max-height: 64px;
  border: 1px solid transparent;
  border-radius: 32px;
  margin: 0 auto;
  padding: 0;
  background-color: #fff;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.15), 0px 3px 8px rgba(0, 0, 0, 0.1);

  :hover {
    #searchbarSeparator {
      border-left: 1px solid transparent;
    }
  }

  :focus-within {
    background-color: #f7f7f7;

    #searchbarSeparator {
      border-left: 1px solid transparent;
    }

    .SearchButton {
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

const FormWrapper = styled.form`
  display: flex;
  position: relative;
  box-sizing: border-box;
  flex-direction: column;
  background-color: transparent;
  width: 850px;
  height: 146px;
  max-height: 146px;
`;

export default { FormWrapper, Fieldset, SearchPanel };
