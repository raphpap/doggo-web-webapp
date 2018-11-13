// Vendor
import styled from 'react-emotion';

// Theme
import theme from 'doggo/theme';

// Types
interface Props {
  error?: boolean;
}

export const TextField = styled.input`
  width: 200px;
  height: 40px;
  padding: ${theme.padding.unit}px;
  border: 2px solid;
  border-color: ${({error}: Props) =>
    error ? theme.colors.error : 'transparent'};
  border-radius: 4px;
  margin-bottom: ${theme.margin.unit}px;
  background: ${theme.colors.grey.grey10};
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: ${theme.colors.grey.grey70};

  &::placeholder {
    color: ${theme.colors.grey.grey20};
  }
`;

export default TextField;
