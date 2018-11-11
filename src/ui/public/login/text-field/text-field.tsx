// Vendor
import styled from 'react-emotion';

// Types
interface Props {
  error?: boolean;
}

// Theme
import theme from 'doggo-web-webapp/theme';

export const TextField = styled.input`
  height: 20px;
  padding: ${theme.padding.unit}px;
  border: 2px solid;
  border-color: ${({error}: Props) =>
    error ? theme.colors.error : 'transparent'};
  border-radius: 4px;
  margin-bottom: ${theme.margin.unit}px;
  background: ${theme.colors.grey.grey10};
  font-size: 14px;
  font-weight: 400;
  color: ${theme.colors.grey.grey70};

  &::placeholder {
    color: ${theme.colors.grey.grey20};
  }
`;

export default TextField;
