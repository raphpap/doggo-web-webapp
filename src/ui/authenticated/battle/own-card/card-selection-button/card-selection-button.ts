// Vendor
import styled from 'react-emotion';

// Theme
import theme from 'doggo/theme';

export const CardSelectionButton = styled.button`
  width: 100%;
  height: 100px;
  border: 1px solid ${theme.colors.white.plain};
  border-radius: 8px;
  background-color: transparent;
  font-size: 24px;
  color: ${theme.colors.white.plain};
  cursor: pointer;
`;

export default CardSelectionButton;
