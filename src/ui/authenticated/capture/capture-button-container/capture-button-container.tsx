// Vendor
import styled from 'react-emotion';

// Theme
import theme from 'doggo/theme';

// Elements
const CaptureButtonContainer = styled.div`
  position: absolute;
  z-index: 50;
  bottom: ${theme.margin.unit * 2}px;
`;

export default CaptureButtonContainer;
