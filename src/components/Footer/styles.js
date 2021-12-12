import styled from 'styled-components';

const FooterContainer = styled.footer`
  /* box model */
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin-top: 6rem;
  padding: 0 1.5rem;
  border-top: 0.0625rem solid #dddddd;

  /* background */
  background-color: #f7f7f7;

  /* layout  */
  display: block;
`;

const FooterLinkContainer = styled.div`
  /* box model */
  padding-top: 2rem;
`;

const LinkSection = styled.section`
  /* box model */
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 0.0625rem solid #dddddd;
`;

const LinkSectionHeader = styled.div`
  /* typography */
  font-size: 0.875rem;
  font-weight: 500;
  color: #222222;
`;

const LinkList = styled.ul`
  /* box model */
  margin-inline-start: 0;
  margin: 0;
  padding: 0;

  /* typography */
  list-style: none;
`;

const LinkItem = styled.li`
  /* box model */
  margin-top: 0.75rem;

  /* typography */
  font-size: 0.875rem;
  font-weight: 300;
`;

const LinkAnchor = styled.a`
  /* typography */
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.125rem;
  color: #222222;
  text-decoration: none;
  outline: none;

  :hover {
    /* typography */
    text-decoration: underline;
  }
`;

const MetaContainer = styled.div`
  /* box model */
  padding-bottom: 2rem;
`;

const MetaCompany = styled.div`
  /* box model */
  padding: 0.25rem 0;

  /* typography */
  font-size: 0.875rem;
  font-weight: 300;
`;

const MetaSeperator = styled.span`
  /* box model */
  width: 1.5rem;

  /* layout  */
  display: inline-block;

  /* typography */
  text-align: center;
`;

const Style = {
  FooterContainer,
  FooterLinkContainer,
  LinkSection,
  LinkSectionHeader,
  LinkList,
  LinkItem,
  LinkAnchor,
  MetaContainer,
  MetaCompany,
  MetaSeperator,
};
export default Style;
