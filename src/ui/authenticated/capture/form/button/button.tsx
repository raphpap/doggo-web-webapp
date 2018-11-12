// Vendor
import styled from 'react-emotion';

// Theme
import theme from 'doggo/theme';

export const Button = styled.button`
  display: block;
  width: 138px;
  height: 35px;
  border-radius: 26px;
  background: ${theme.colors.white.plain};
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  color: ${theme.colors.grey.grey70};
  cursor: pointer;
`;

export default Button;
