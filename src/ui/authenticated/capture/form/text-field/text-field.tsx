// Vendor
import styled from 'react-emotion';

// Types
interface Props {
  error?: boolean;
}

// Theme
import theme from 'doggo/theme';

export const TextField = styled.input`
  width: calc(100% - 20px);
  height: 20px;
  padding: ${theme.padding.unit}px;
  border: 2px solid;
  border-color: ${({error}: Props) =>
    error ? theme.colors.error : 'transparent'};
  border-radius: 4px;
  margin: ${theme.margin.unit}px 0 ${theme.margin.unit * 2}px;
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
