// Vendor
import styled from 'react-emotion';

// Theme
import theme from 'doggo/theme';

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: ${theme.margin.unit * 2}px;
`;

export default ButtonRow;
