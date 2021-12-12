import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const Footer = ({ links, copyright, className }) => {
  return (
    <Style.FooterContainer className={className}>
      <Style.FooterLinkContainer>
        {links.map(({ key, section, paths }) => (
          <Style.LinkSection key={key}>
            <Style.LinkSectionHeader>{section}</Style.LinkSectionHeader>
            <Style.LinkList>
              {paths.map(({ key, label, href }) => (
                <Style.LinkItem key={key}>
                  <Style.LinkAnchor href={href}>{label}</Style.LinkAnchor>
                </Style.LinkItem>
              ))}
            </Style.LinkList>
          </Style.LinkSection>
        ))}
      </Style.FooterLinkContainer>
      <Style.MetaContainer>
        <Style.MetaCompany>{copyright}</Style.MetaCompany>
        <Style.LinkAnchor>Privacy</Style.LinkAnchor>
        <Style.MetaSeperator>·</Style.MetaSeperator>
        <Style.LinkAnchor>Terms</Style.LinkAnchor>
      </Style.MetaContainer>
    </Style.FooterContainer>
  );
};

Footer.propTypes = {
  /**
   * Sectioin of links that should be displayed
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      section: PropTypes.string.isRequired,
      paths: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired
  ).isRequired,
  /**
   * Company trademark including year of
   */
  copyright: PropTypes.string.isRequired,
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default Footer;
