// Vendor
import React, {Component} from 'react';
import styled from 'react-emotion';

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: #0e1111;

  @media (max-width: 768px) {
    height: 60px;
  }
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export class Header extends Component {
  public render() {
    return (
      <StyledHeader>
        <Title>this.props.children</Title>
      </StyledHeader>
    );
  }
}

export default Header;
