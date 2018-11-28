// Vendor
import styled from 'react-emotion';

// Theme
import theme from 'doggo/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 540px;
  padding: ${theme.padding.unit * 4}px 0;

  @media screen and (min-width: 480px) {
    height: 640px;
  }
`;

export default Container;
