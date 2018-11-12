// Vendor
import React from 'react';
import styled from 'react-emotion';

// Assets
import logo from 'doggo/assets/images/capture-logo.png';

// Theme
import theme from 'doggo/theme';

// Shared Components
import Logo from 'doggo/ui/@components/logo';

// Types
interface Props {
  onClick: () => void;
}

// Elements
const CaptureButtonComponent = styled.button`
  position: absolute;
  z-index: 50;
  bottom: ${theme.margin.unit * 2}px;
  width: 160px;
  height: 80px;
  border: 5px solid #0ff;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  outline: none;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  cursor: pointer;

  :active {
    border: 6px solid #0ff;
  }
`;

export class CaptureButton extends React.Component<Props> {
  public render() {
    const {onClick} = this.props;

    return (
      <CaptureButtonComponent onClick={onClick}>
        <Logo logo={logo} marginUnits={0.1} />
      </CaptureButtonComponent>
    );
  }
}

export default CaptureButton;
