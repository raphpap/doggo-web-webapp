// Vendor
import React from 'react';
import styled from 'react-emotion';

// Theme
import theme from 'doggo-web-webapp/theme';

interface Props {}

const Container = styled.div`
  display: flex;
  opacity: 0.8;
  align-items: center;
  margin: ${theme.margin.unit * 1.5}px 0 ${theme.margin.unit}px;
  font-size: 13px;
  line-height: 15px;
  color: ${theme.colors.white.plain};
`;

export const ErrorMessage: React.SFC<Props> = () => (
  <Container>
    <span>Wrong username and/or password</span>
  </Container>
);

export default ErrorMessage;
