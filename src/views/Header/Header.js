import React, { useContext } from "react";
import Style from "./styles";
import { ModalContext } from "../../context/ModalContext";
import useSearchbarControl from "../../hooks/useSearchbarControl";

import { DialogSignIn } from "../../components/Dialogs/DialogSignIn";

const Header = () => {
  const { handleOpenModal, handleCloseModal } = useContext(ModalContext);
  const [ref, expandBar, wrapBar, setExpandedBar] = useSearchbarControl({});

  const handleHeaderFocus = (e) => {
    e.persist();
    if (e.target.id === "inputSearchData") {
      setExpandedBar(true);
    }
  };

  const items = [
    {
      key: "1",
      weight: "bold",
      text: "Sign up",
      divider: false,
      onClick: () =>
        handleOpenModal(
          <DialogSignIn
            headerTitle="Sign Up"
            footerText="Already have an account?"
            anchorText="Log in"
            onHeaderClose={handleCloseModal}
          />
        ),
    },
    {
      key: "2",
      weight: "light",
      text: "Log in",
      divider: true,
      onClick: () =>
        handleOpenModal(
          <DialogSignIn
            headerTitle="Log in"
            footerText="Don’t have an account?"
            anchorText="Sign up"
            onHeaderClose={handleCloseModal}
          />
        ),
    },
    {
      key: "3",
      weight: "light",
      text: "Offer a service",
      divider: false,
      onClick: () => console.log("Route to services"),
    },
    {
      key: "4",
      weight: "light",
      text: "Help",
      divider: false,
      onClick: () => console.log("Route to Help"),
    },
  ];

  const inputs = [
    {
      key: "SEARCH_INPUT_SECONDARY",
      className: "searchInputSecondary",
      inputLabel: "Service",
      inputPlaceholder: "What service are you looking for?",
      isSearch: false,
      divider: true,
    },
  ];

  return (
    <>
      <Style.Wrapper onFocus={handleHeaderFocus} ref={ref}>
        <Style.WrapperSection expandBar={expandBar} wrapBar={wrapBar}>
          <Style.SearchbarExtended
            inputs={inputs}
            expandBar={expandBar}
            wrapBar={wrapBar}
          />
          <Style.NavbarExtended items={items} />
        </Style.WrapperSection>
      </Style.Wrapper>
      <Style.Spotlight wrapBar={wrapBar} expandBar={expandBar} />
    </>
  );
};

export default Header;
