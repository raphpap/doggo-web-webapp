// Vendor
import React from 'react';
import styled from 'react-emotion';
import {compose} from 'recompose';

// Vendor components
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

// Context
import {
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo-web-webapp/context';

const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: #fff;
  color: #000;
`;

// Types
interface State {}
interface Props extends RouteComponentProps<never> {}
type EnhancedProps = Props & WithApplicationContextProps;

const enhance = compose<EnhancedProps, Props>(
  withApplicationContext,
  withRouter
);

export class Login extends React.Component<EnhancedProps, State> {
  public render() {
    const {context, location} = this.props;
    const {state} = context;
    const {cards} = state;
    const isAuthenticated = !!cards;

    const {from} = location.state || {from: {pathname: '/capture'}};
    if (isAuthenticated) return <Redirect to={from} />;

    return <Button onClick={this.handleLoginClicked}>Login</Button>;
  }

  private handleLoginClicked = () => {
    const {context} = this.props;
    const {actions} = context;
    const {login} = actions;
    login('username', 'password');
  };
}

export default enhance(Login);
