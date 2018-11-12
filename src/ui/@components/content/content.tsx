// Vendor
import styled from 'react-emotion';

// Theme
import theme from 'doggo/theme';

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: ${theme.padding.unit * 8}px;
`;

export default Content;
