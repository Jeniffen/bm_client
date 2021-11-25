import styled, { css } from 'styled-components';
import img_avatar from './static/icon-avatar.svg';
import img_close from './static/icon-close.svg';
import img_logo_apple from './static/icon-logo-apple.svg';
import img_logo_chevron_left from './static/icon-chevron-left.svg';
import img_logo_chevron_right from './static/icon-chevron-right.svg';
import img_logo_facebook from './static/icon-logo-facebook.svg';
import img_logo_google from './static/icon-logo-google.svg';
import img_magnifier from './static/icon-magnifier.svg';
import img_mail from './static/icon-mail.svg';

export const Icons = styled.img`
  box-sizing: border-box;
  position: relative;
  margin: 0 16px 0 16px;

  ${({ size }) => {
    switch (size) {
      case 'tiny':
        return css`
          width: 5px;
          height: 5px;
        `;
      case 'x-small':
        return css`
          width: 16px;
          height: 16px;
        `;
      case 'small':
        return css`
          width: 20px;
          height: 20px;
        `;
      default:
        return css`
          width: 20px;
          height: 20px;
        `;
    }
  }};

  content: ${({ type }) => {
    switch (type) {
      case 'avatar':
        return `url(${img_avatar})`;
      case 'chevron-left':
        return `url(${img_logo_chevron_left})`;
      case 'chevron-right':
        return `url(${img_logo_chevron_right})`;
      case 'close':
        return `url(${img_close})`;
      case 'logo-apple':
        return `url(${img_logo_apple})`;
      case 'logo-facebook':
        return `url(${img_logo_facebook})`;
      case 'logo-google':
        return `url(${img_logo_google})`;
      case 'magnifier':
        return `url(${img_magnifier})`;
      case 'mail':
        return `url(${img_mail})`;
      default:
        return `url(${type})`;
    }
  }};
`;

const Style = { Icons };
export default Style;
