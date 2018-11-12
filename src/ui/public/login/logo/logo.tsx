// Vendor
import React from 'react';
import styled from 'react-emotion';

// Theme
import theme from 'doggo-web-webapp/theme';

// Assets
import logo from 'doggo-web-webapp/assets/images/doggo-logo.png';

const LogoImg: React.SFC = props => <img src={logo} {...props} />;

export const Logo = styled(LogoImg)`
  display: block;
  width: 100%;
  max-width: 440px;
  height: auto;
  margin: ${theme.margin.unit * 5}px;
`;

export default Logo;
