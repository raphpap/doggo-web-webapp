// Vendor
import React, {Component} from 'react';
import styled from 'react-emotion';

// Vendor Components
import {NavLink, withRouter} from 'react-router-dom';
import {compose} from 'recompose';

// Vendor Types
import {RouteComponentProps} from 'react-router';

// Theme
import theme from 'doggo-web-webapp/theme';

// Elements
const Link = styled(NavLink)`
  text-decoration: none;
  color: ${theme.colors.white.transparent};
  user-select: none;

  &.active {
    border-bottom: 2px solid ${theme.colors.white.plain};
    color: ${theme.colors.white.plain};
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
  background-color: ${theme.colors.grey.grey70};
`;

const Title = styled.h1`
  font-size: 16px;
  color: inherit;
`;

// Types
interface Props {}

type EnhancedProps = Props & RouteComponentProps<never>;

const enhance = compose<EnhancedProps, Props>(withRouter);

export class Header extends Component<EnhancedProps> {
  public render() {
    return (
      <StyledHeader>
        <Link to="/team" activeClassName={'active'}>
          <Title>Team</Title>
        </Link>
        <Link to="/capture" activeClassName={'active'}>
          <Title>Capture</Title>
        </Link>
        <Link to="/battle" activeClassName={'active'}>
          <Title>Battle</Title>
        </Link>
      </StyledHeader>
    );
  }
}

export default enhance(Header);
