import React from "react";
import PropTypes from "prop-types";
import { StyledFooterWrapper } from "./StyledDialogFooter";

const DialogFooter = ({ footerText, anchorText }) => {
  return (
    <StyledFooterWrapper>
      <p>
        {footerText} <a>{anchorText}</a>
      </p>
    </StyledFooterWrapper>
  );
};

DialogFooter.propTypes = {
  /**
   * Plaintext shown in dialog footer
   */
  footerText: PropTypes.string.isRequired,
  /**
   * Anchor text shown in dialog footer
   */
  anchorText: PropTypes.string,
};

export default DialogFooter;
