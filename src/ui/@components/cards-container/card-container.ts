// Vendor
import styled from 'react-emotion';

// Theme
import theme from 'doggo/theme';

export const CardsContainer = styled.ul`
  width: 300px;
  padding: 0;

  @media screen and (min-width: ${theme.breakpoints.medium}px) {
    width: 450px;
  }
`;

export default CardsContainer;
