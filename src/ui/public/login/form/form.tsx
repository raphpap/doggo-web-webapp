// Vendor
import styled from 'react-emotion';

// Theme
import theme from 'doggo/theme';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${theme.margin.unit * 2.5}px;
`;

export default Form;
