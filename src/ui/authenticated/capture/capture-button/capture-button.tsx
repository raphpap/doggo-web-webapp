// Vendor
import styled from 'react-emotion';

// Theme
import theme from 'doggo-web-webapp/theme';

export const CaptureButton = styled.button`
  position: absolute;
  z-index: 50;
  bottom: ${theme.margin.unit * 2}px;
  width: 100px;
  height: 100px;
  border: 2px solid ${theme.colors.grey.grey60};
  border-radius: 50%;
  background-color: ${theme.colors.white.transparent};
  outline: none;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  cursor: pointer;

  :active {
    border: 2px solid green;
  }
`;

export default CaptureButton;
