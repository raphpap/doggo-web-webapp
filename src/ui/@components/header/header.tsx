// Vendor
import React, {Component} from 'react';
import styled from 'react-emotion';

// Vendor Components
import {NavLink, withRouter} from 'react-router-dom';
import {compose} from 'recompose';

// Vendor Types
import {RouteComponentProps} from 'react-router';

// Elements
const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  color: rgba(255, 255, 255, 0.7);
  user-select: none;

  &.active {
    border-bottom: 2px solid #fff;
    color: #fff;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #0e1111;
`;

const Title = styled.h1`
  font-size: 16px;
  color: inherit;
`;

// Types
interface Props {}

type EnhancedProps = Props &
  RouteComponentProps<never>;

const enhance = compose<EnhancedProps, Props>(
  withRouter
);

export class Header extends Component<EnhancedProps> {
  public render() {
    return (
      <StyledHeader>
        <Link to="/team" activeClassName={'active'}><Title>Team</Title></Link>
        <Link to="/capture" activeClassName={'active'}><Title>Capture</Title></Link>
        <Link to="/battle" activeClassName={'active'}><Title>Battle</Title></Link>
      </StyledHeader>
    );
  }
}

export default enhance(Header);
