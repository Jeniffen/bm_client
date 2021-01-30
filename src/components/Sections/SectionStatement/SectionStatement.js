import React from "react";
import PropTypes from "prop-types";
import Style from "./styles";

const SectionStatement = ({ sectionTheme, statementTitle, statementText }) => {
  return (
    <Style.Wrapper sectionTheme={sectionTheme}>
      <Style.Header
        mainTitle={statementTitle}
        textAlign="center"
        mainTextWeight="xl-thick"
        mainTextSize="48"
      />
      <Style.Paragraphs text={statementText} />
    </Style.Wrapper>
  );
};

SectionStatement.propTypes = {
  /**
   * Theme of the section
   */
  sectionTheme: PropTypes.oneOf(["light", "dark"]),
  /**
   * Title of Statement
   */
  statementTitle: PropTypes.string,
  /**
   * Statement text that is displayed
   */
  statementText: PropTypes.string,
};

export default SectionStatement;
