// Vendor
import styled from 'react-emotion';

// Theme
import theme from 'doggo/theme';

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.grey.grey60};
`;

export default Container;
