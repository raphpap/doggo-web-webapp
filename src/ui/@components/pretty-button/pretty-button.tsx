// Vendor
import React from 'react';
import styled from 'react-emotion';

// Shared Components
import Logo from 'doggo/ui/@components/logo';

// Elements
const PrettyButtonComponent = styled.button`
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

// Types
interface Props {
  onClick: () => void;
  logo: string;
}

export class PrettyButton extends React.Component<Props> {
  public render() {
    const {logo, onClick} = this.props;

    return (
      <PrettyButtonComponent onClick={onClick}>
        <Logo logo={logo} marginUnits={0.1} height={'70px'} />
      </PrettyButtonComponent>
    );
  }
}

export default PrettyButton;
