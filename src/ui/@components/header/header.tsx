// Vendor
import React, {Component} from 'react';
import styled from 'react-emotion';

// Vendor Components
import {Link as ReactRouterLink} from 'react-router-dom';

// Elements
const Link = styled(ReactRouterLink)`
  text-decoration: none;
  color: #fff;
  user-select: none;
`;

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-around;
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
        <Link to="/team">Team</Link>
        <Link to="/capture">
          <Title>Doggo</Title>
        </Link>
        <Link to="/battle">Battle</Link>
      </StyledHeader>
    );
  }
}

export default Header;
